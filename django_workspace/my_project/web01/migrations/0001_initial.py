# Generated by Django 3.1.5 on 2021-01-22 08:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Content',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=105)),
                ('context', models.CharField(max_length=225)),
                ('cnt', models.IntegerField(default=0)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.CharField(max_length=50)),
                ('password', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Reply',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(max_length=50)),
                ('replyCon', models.CharField(max_length=200)),
                ('originalCon', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web01.content')),
            ],
        ),
        migrations.AddField(
            model_name='content',
            name='userId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web01.user'),
        ),
    ]