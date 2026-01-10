from django.urls import path
from django.views.generic.base import TemplateView

app_name = 'review'
verbose_name = 'отзывы клиентов'

urlpatterns = [
    path('', TemplateView.as_view(template_name='review/index.html'), name='index'),
]