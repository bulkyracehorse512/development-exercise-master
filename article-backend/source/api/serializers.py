from rest_framework import serializers

from source.models import Tag, Article


class TagSerializer(serializers.ModelSerializer):
    """ Creates formatted Tag data to return from API. """
    class Meta:
        model = Tag
        fields = '__all__'


class ArticleSerializer(serializers.ModelSerializer):
    """ Creates formatted Article data to return from API. """
    author = serializers.SerializerMethodField()
    tags = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = '__all__'

    def get_author(self, article):
        return article.author.get_full_name()

    def get_tags(self, article):
        return [t.tag for t in article.tags.all()]
