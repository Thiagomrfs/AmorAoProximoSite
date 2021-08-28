from actions import views
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('actions.urls')),
    path('formvol', views.formvol, name="formvol"),
    path('formact', views.formact, name="formact"),
    path('feedback', views.feedback, name="feedback")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
