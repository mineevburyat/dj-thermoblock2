from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('apps.home4.urls', namespace='home')),
    path('blocks/', include('apps.blocksale.urls')),
    path('construction/', include('apps.construction.urls')),
    
    # Редиректы для удобства
    path('catalog/', RedirectView.as_view(url='/blocks/', permanent=True)),
    path('projects/', RedirectView.as_view(url='/construction/projects/', permanent=True)),
    path('build/', RedirectView.as_view(url='/construction/', permanent=True)),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
