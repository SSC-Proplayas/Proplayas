# -- encoding: utf-8 --

from django.db import models
from django.contrib.auth.models import User
from django.forms import model_to_dict
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin



#Create your models here.

#User Manager

class UserManager(BaseUserManager):
    def create_user(self, username, email, nombres, apellidos, password=None):
        """
        Crea y guarda un usuario con el correo y contraseña dadas
        """
        if not email:
            raise ValueError('El usuario debe tener un correo')
        
        user = self.model(
            email = self.normalize_email(email),
            username = username,
            nombres = nombres,
            apellidos = apellidos,
        )
    
        user.set_password(password)
        user.save()
        
        return user
    
    def create_superuser(self, username, email, nombres, apellidos, password):
        user = self.create_user(
            email=email,
            username = username,
            nombres = nombres,
            apellidos = apellidos,
            password=password,
        )

        user.usuario_admin = True
        user.save()
        return user



rol_choices = [
    ('Admin', 'Admin'),
    ('Nodo', 'Nodo'),
    ('SubAdmin', 'SubAdmin'),

]

class User(AbstractBaseUser):
    username = models.CharField('Nombre de Usuario', max_length=50, blank=True, null=True, unique=True)
    email = models.EmailField('Correo', max_length=254, unique=True)
    nombres = models.CharField('Nombre', max_length=200, blank=True, null=True)
    apellidos = models.CharField('Apellidos', max_length=50, blank=True, null=True)
    rol = models.CharField('Rol de usuario', max_length=50, blank=True, null=True, choices=rol_choices)
    usuario_activo = models.BooleanField('Usuario activo', default=True)
    usuario_admin = models.BooleanField('Usuario administrador', default=False)
    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'nombres', 'apellidos']


    def _str_(self):
        return f'{self.nombres}'
    
    def has_perm(self, perm, obj=None):
        return True
    
    def has_module_perms(self, app_label):
        return True
    
    @property
    def is_staff(self):
        return self.usuario_admin