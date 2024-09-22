from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField()
    last_name = models.CharField()
    email = models.EmailField(unique=True, error_messages={"unique": "Email already registered."})
    username = models.CharField(unique=True,
                                error_messages={"unique": "This username is in use. Try different username."})
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username
