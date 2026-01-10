from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static
from .views import test_404, test_500, test_400, test_403,favicon


urlpatterns = [
    path('admin/', admin.site.urls),
    path('favicon.ico', favicon),
    path('', include('apps.home.urls', namespace='home')),
    path('blocks/', include('apps.blocksale.urls', namespace='blocksale')),
    path('construction/', include('apps.construction.urls', namespace='construction')),
    path('faq/', include('apps.faq.urls', namespace='faq')),
    path('about/', include('apps.about.urls', namespace='about')),
    path('review/', include('apps.review.urls', namespace='review')),
    # Редиректы для удобства
    path('catalog/', RedirectView.as_view(url='/blocks/', permanent=True)),
    path('projects/', RedirectView.as_view(url='/construction/projects/', permanent=True)),
    path('build/', RedirectView.as_view(url='/construction/', permanent=True)),

    # path('test-404/', test_404),
    # path('test-500/', test_500),
    # path('test-403/', test_403),
    # path('test-400/', test_400),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += [

    ]