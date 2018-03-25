from django.db import models
from django.utils import timezone


class MessagePost(models.Model):
    text = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    is_readed = models.BooleanField(('Прочитано'), default=False)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
