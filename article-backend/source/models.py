# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import User
from django.db import models
from django.template.defaultfilters import slugify

from .utils import get_ghost_user, unique_slug


class Tag(models.Model):
    """ Basic tag model to create hashtag from given string.
    TODO: update for more complex funtionality."""

    tag = models.CharField(max_length=200, unique=True)

    def save(self, *args, **kwargs):
        """ Saves the tag after formatting. """
        self.tag = "#{}".format(self.tag.replace(' ', ''))
        super(Tag, self).save(*args, **kwargs)

    def __str__(self):
        return self.tag


class Article(models.Model):
    """ Aticle model consisting of title, content, author, featured quote,
    and tags.
    """
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    author = models.ForeignKey(User, on_delete=models.SET(get_ghost_user),)
    tags = models.ManyToManyField(Tag)
    content = models.TextField()
    feature = models.TextField()

    date_created = models.DateTimeField("Date Created", auto_now_add=True)
    date_modified = models.DateTimeField("Date Modified", auto_now=True,
                                         editable=False)

    def prepare_save(self):
        """ This prepares the object to be saved without saving the
        data to the database. It is called in the `save` method. This creates a
        unique slug for an article by appending a unique 5 character hash to the
        end of duplicate titles.
        """
        if not self.slug:
            slug = slugify(self.title)
            if not Article.objects.filter(slug=slug).exists():
                self.slug = unique_slug(self.title)
            else:
                self.slug = slug

    def save(self, *args, **kwargs):
        """ Saves the article after calling `self.prepare_save`. """
        self.prepare_save()
        super(Article, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
