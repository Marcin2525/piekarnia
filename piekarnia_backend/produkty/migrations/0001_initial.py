# Generated by Django 5.1.2 on 2024-10-28 20:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Produkt',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nazwa', models.CharField(max_length=100)),
                ('opis', models.TextField()),
                ('cena', models.DecimalField(decimal_places=2, max_digits=6)),
                ('obrazek', models.ImageField(blank=True, null=True, upload_to='produkty/')),
            ],
        ),
    ]