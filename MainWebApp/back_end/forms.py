from django import forms

class ContactEmailForm(forms.Form):
    name = forms.CharField()
    phone = forms.CharField(required = False)
    email = forms.CharField()
    address = forms.CharField(required = False)
    message = forms.CharField(required = False)

class staffLoginForm(forms.Form):
    loginName = forms.CharField()
    password = forms.CharField()