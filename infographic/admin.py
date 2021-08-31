from infographic.models import Infographic
from django.contrib import admin

class InfographicAdmin(admin.ModelAdmin):
    def has_add_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Infographic, InfographicAdmin)
