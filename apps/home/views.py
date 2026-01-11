from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.defaults import page_not_found, server_error

from django.template import engines

class HomeView(TemplateView):
    """Главная страница"""
    template_name = 'home/index.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Получаем стандартный движок DjangoTemplates
        # engine = engines['django'].engine
    
        # # Собираем данные изо всех процессоров, указанных в settings.py
        # cp_data = {}
        # for processor in engine.template_context_processors:
        #     cp_data.update(processor(self.request))
    
        # # Теперь cp_data содержит всё, что добавят процессоры (user, request, и т.д.)
        # print(cp_data) 
        context['page_title'] = 'ThermoBlock | Главная страница'
        return context
