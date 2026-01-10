from datetime import datetime

def error_context(request):
    """Контекстный процессор для страниц ошибок"""
    return {
        'site_name': 'ThermoBlock',
        'site_url': 'https://thermoblock.ru',
        'support_email': 'support@thermoblock.ru',
        'support_phone': '+7 (924) 5555-937',
        'current_year': datetime.now().year,
    }