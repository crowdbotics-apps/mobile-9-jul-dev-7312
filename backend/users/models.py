from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    name = models.CharField(null=True, blank=True, max_length=255,)
    ipAddress = models.GenericIPAddressField(
        null=True, blank=True, protocol="both", unpack_ipv4=False,
    )
    positiveinteger = models.PositiveIntegerField(null=True, blank=True,)
    slug = models.SlugField(null=True, blank=True, max_length=50,)
    text = models.TextField(null=True, blank=True,)
    time = models.TimeField(null=True, blank=True,)

    def get_absolute_url(self):
        return reverse("users:detail", kwargs={"username": self.username})
