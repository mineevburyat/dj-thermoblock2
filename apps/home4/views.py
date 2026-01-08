from django.shortcuts import render
from django.views.generic import TemplateView

class HomeView(TemplateView):
    """Главная страница"""
    template_name = 'home/index1.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['page_title'] = 'ThermoBlock - Главная страница'
        return context
