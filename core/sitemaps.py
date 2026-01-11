from django.contrib.sitemaps import Sitemap
from django.conf import settings

class StaticViewSitemap(Sitemap):
    """Sitemap для статических страниц"""
    changefreq = "monthly"  # раз в месяц
    priority = 0.8  # высокая важность
    protocol = 'https' if not settings.DEBUG else 'https'
    domain = 'mail.ru'
    
    def items(self):
        return [
            {'name': 'home', 'url': '/', 'priority': 1.0, 'freq': 'weekly'},
            {'name': 'about', 'url': '/about/', 'priority': 0.7, 'freq': 'yearly'},
            {'name': 'blocks', 'url': '/blocks/', 'priority': 0.9, 'freq': 'weekly'},
            {'name': 'construction', 'url': '/construction/', 'priority': 0.8, 'freq': 'monthly'},
            {'name': 'faq', 'url': '/faq/', 'priority': 0.6, 'freq': 'monthly'},
            {'name': 'reviews', 'url': '/reviews/', 'priority': 0.5, 'freq': 'daily'},
        ]
    
    def location(self, item):
        # Получаем URL по имени
        return item['url']
    
    def priority(self, item):
        # Разная важность для разных страниц
        return item['priority']
    
    def changefreq(self, item):
        # Разная частота обновлений
        return item['freq']
    
BlockViewSiteMap = None