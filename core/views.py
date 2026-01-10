from django.shortcuts import render
from django.http import HttpResponseNotFound, HttpResponseServerError
from django.http import FileResponse, HttpRequest, HttpResponse
from django.views.decorators.cache import cache_control
from django.views.decorators.http import require_GET
from django.conf import settings

@require_GET
@cache_control(max_age=60 * 60 * 24, immutable=True, public=True)  # one day
def favicon(request: HttpRequest) -> HttpResponse:
    file = (settings.BASE_DIR / "apps" / "home" / "static" / "favicon.ico").open("rb")
    return FileResponse(file)


def test_404(request):
    """Тестовая страница для 404 ошибки"""
    return HttpResponseNotFound(render(request, '404.html'))

def test_500(request):
    """Тестовая страница для 500 ошибки"""
    # Имитация ошибки сервера
    raise Exception('Тестовая 500 ошибка')

def test_400(request):
    """Тестовая страница для 400 ошибки"""
    return HttpResponseNotFound(render(request, '400.html'))

def test_403(request):
    """Тестовая страница для 403 ошибки"""
    return HttpResponseNotFound(render(request, '403.html'))