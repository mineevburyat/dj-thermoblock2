from django.urls import path
from django.views.generic.base import TemplateView

app_name = 'home2'

urlpatterns = [
    path('', TemplateView.as_view(template_name='start.html'), name='index'),
]