from django.db import models

# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200) #  un string para saber que maximo son 200 caracteres
    description = models.TextField(blank=True) # blank para que si no le pasan nada pueda pasarlo
    done = models.BooleanField(default=False) # tarea con dos estados true/false por defecto una tarea estara en false

    def __str__(self): # fucnion que define a el mismo
        return self.title # lo que se puede ver en administrador en este caso el titulo