# -- encoding: utf-8 --


from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import *



class LoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(
            attrs={
                "placeholder": "Username",
                "class": "form-control"
            }
        ))
    password = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Password",
                "class": "form-control"
            }
        ))


class SignUpForm(forms.ModelForm):
    
    password1 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Ingresa Contraseña",
                "class": "form-control",
                "id": "password1",
                "autocomplete": "off"
            }
        ))
    password2 = forms.CharField(
        widget=forms.PasswordInput(
            attrs={
                "placeholder": "Confirmar Contraseña",
                "class": "form-control",
                "id": "password2"
            }
        ))

    class Meta:
        model = User
        fields = ('rol','username', 'email', 'nombres', 'apellidos', 'password1', 'password2')
        widgets = {
            'rol': forms.Select(attrs={'placeholder': 'Rol', 'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Correo Electronico', 'class': 'form-control'}),
            'username': forms.TextInput(attrs={'placeholder': 'Username', 'class': 'form-control', 'autocomplete': 'off'}),
            'nombres': forms.TextInput(attrs={'placeholder': 'Nombre', 'class': 'form-control'}),
            'apellidos': forms.TextInput(attrs={'placeholder': 'Apellidos', 'class': 'form-control'}),
        }
    


    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Las contraseñas no coinciden")
        return password2

    def save(self, commit = True):
        user = super().save(commit = False)
        user.set_password(self.cleaned_data['password1'])
        if commit:
            user.save()
        return user