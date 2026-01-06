from django.urls import path
from django.views.generic.base import TemplateView

app_name = 'constructions'
verbose_name = 'строительство дома под ключ'

urlpatterns = [
    path('', TemplateView.as_view(template_name='construction/index.html'), name='index'),
]