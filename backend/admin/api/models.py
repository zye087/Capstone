from django.db import models

# Create your models here.
class student(models.Model):
    first_name = models.CharField(max_length=50, null=True, blank=True)
    last_name = models.CharField(max_length=50, null=True, blank=True)
    suffix = models.CharField(max_length=10, null=True, blank=True)
    section = models.CharField(max_length=15, null=True, blank=True)
    gender = models.CharField(max_length=10, null=True, blank=True)
    age = models.IntegerField(null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    status = models.CharField(max_length=15, null=True, blank=True)

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