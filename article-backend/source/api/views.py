from django.contrib.auth.models import User, Group
from rest_framework import viewsets

from .serializers import ArticleSerializer, TagSerializer
from source.models import Article, Tag


class ArticleViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows Articles to be viewed or edited.
    """
    queryset = Article.objects.all().order_by('-date_modified')
    serializer_class = ArticleSerializer


class TagViewSet(viewsets.ModelViewSet):
    """ API endpoint that allows tags to be viewed or edited.
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
