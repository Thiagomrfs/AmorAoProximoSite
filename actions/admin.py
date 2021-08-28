from django.db import models
from django.forms import TextInput, Textarea
from actions.models import Action
from django.contrib import admin

class ActionAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.CharField: {'widget': TextInput(attrs={'size':'40'})},
        models.TextField: {'widget': Textarea(attrs={'rows':20, 'cols':150})},
    }

admin.site.register(Action, ActionAdmin)
