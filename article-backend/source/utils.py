from __future__ import unicode_literals

import uuid

from django.contrib.auth.models import User
from django.template.defaultfilters import slugify


GHOST_USER_EMAIL = 'ghost@example.com'


def unique_slug(text):
    """ Force a unique slug by always appending 5 digits of a uuid to the
    end of a slug.
    """
    number = str(uuid.uuid1().int)
    return "{}-{}".format(slugify(text), number[-10:-5])


def get_ghost_user():
    """ Returns a user object to use as the default to handle when a user
    object is deleted, and there is a foreign key related object.
    """
    return User.objects.get(email=GHOST_USER_EMAIL)
