from django.db import models

# Create your models here.
class student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name

    class Meta:
        db_table = 'student'

class parentGuardian(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name

    class Meta:
        db_table = 'parents_guardians'