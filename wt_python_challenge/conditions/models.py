from django.db import models

# Create your models here.
class Condition(models.Model):
    name = models.CharField(max_length=256, blank=False, help_text="name of condition")

    class Meta(object):
        verbose_name = "Condition"
        verbose_name_plural = "Conditions"
