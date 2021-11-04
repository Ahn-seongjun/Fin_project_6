from django.db import models


class Warehouse(models.Model):
    id = models.IntegerField(primary_key=True)
    brand = models.CharField(max_length=2000, blank=True, null=True)
    name = models.CharField(max_length=2000, blank=True, null=True)
    model = models.CharField(max_length=2000, blank=True, null=True)
    trim = models.CharField(max_length=2000, blank=True, null=True)
    fuel = models.CharField(max_length=2000, blank=True, null=True)
    km = models.IntegerField(blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    location = models.CharField(max_length=2000, blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    link = models.CharField(max_length=2000, blank=True, null=True)
    photo = models.CharField(max_length=2000, blank=True, null=True)
    color = models.CharField(max_length=20, blank=True, null=True)
    accident = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'warehouse'


class Warehouse1(models.Model):
    id = models.IntegerField(primary_key=True)
    brand = models.CharField(max_length=20, blank=True, null=True)
    name = models.CharField(max_length=20, blank=True, null=True)
    model = models.CharField(max_length=2000, blank=True, null=True)
    trim = models.CharField(max_length=20, blank=True, null=True)
    fuel = models.CharField(max_length=20, blank=True, null=True)
    km = models.IntegerField(blank=True, null=True)
    year = models.IntegerField(blank=True, null=True)
    location = models.CharField(max_length=20, blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    link = models.CharField(max_length=2000, blank=True, null=True)
    photo = models.CharField(max_length=2000, blank=True, null=True)
    color = models.CharField(max_length=20, blank=True, null=True)
    accident = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'warehouse1'


class Search(models.Model):
    id = models.IntegerField(primary_key=True)
    brand = models.CharField(max_length=200, blank=True, null=True)
    name = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'search'

# Create your models here.
