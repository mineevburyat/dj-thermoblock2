from django.urls import path
from django.views.generic.base import TemplateView

app_name = 'blocksale'
verbose_name = 'информация о блоках и их продажа'

urlpatterns = [
    path('', TemplateView.as_view(template_name='blocksale/index.html'), name='index'),
]