from django.urls import path
from django.views.generic.base import TemplateView

app_name = 'faq'
verbose_name = 'вопрос-ответ'

urlpatterns = [
    path('', TemplateView.as_view(template_name='faq/index.html'), name='index'),
]