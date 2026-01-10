from django.urls import path
from django.views.generic.base import TemplateView

app_name = 'about'
verbose_name = 'о нас и блог'

urlpatterns = [
    path('', TemplateView.as_view(template_name='about/index.html'), name='index'),
]