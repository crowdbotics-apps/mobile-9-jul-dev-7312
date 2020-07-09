from django.conf import settings
from django.db import models

# Create your models here.

from django.db import models


class CustomText(models.Model):
    title = models.CharField(max_length=150,)
    binary = models.BinaryField(null=True, blank=True,)
    bolean = models.BooleanField(null=True, blank=True,)
    char = models.CharField(null=True, blank=True, max_length=256,)
    date = models.DateField(null=True, blank=True,)
    datetime = models.DateTimeField(null=True, blank=True,)
    decimal = models.DecimalField(
        null=True, blank=True, max_digits=30, decimal_places=10,
    )

    def __str__(self):
        return self.title

    @property
    def api(self):
        return f"/api/v1/customtext/{self.id}/"

    @property
    def field(self):
        return "title"


class HomePage(models.Model):
    body = models.TextField()
    duration = models.DurationField(null=True, blank=True,)
    email = models.EmailField(null=True, blank=True, max_length=254,)
    integer = models.IntegerField(null=True, blank=True,)
    float = models.FloatField(null=True, blank=True,)
    foreign = models.ForeignKey(
        "users.User",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="homepage_foreign",
    )
    test = models.ManyToManyField(
        "home.CustomText", blank=True, related_name="homepage_test",
    )

    @property
    def api(self):
        return f"/api/v1/homepage/{self.id}/"

    @property
    def field(self):
        return "body"
