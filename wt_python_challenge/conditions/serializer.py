from rest_framework import serializers
from conditions.models import Condition


class ConditionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Condition
        fields = ('id', 'name',)
