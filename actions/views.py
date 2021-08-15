from django import template
from django.http.response import HttpResponse
from django.template import loader
from actions.models import Action
from updates.models import Update


def index(request):
    template = loader.get_template('index.html')

    education = Action.objects.filter(category='EDU')
    sports = Action.objects.filter(category='ESP')
    culture = Action.objects.filter(category='CLT')
    food = Action.objects.filter(category='CNM')
    updates = Update.objects.order_by('-data')
    
    context = {
        "education": education,
        "sports": sports,
        "culture": culture,
        "food": food,
        "updates": updates[:5]
    }

    return HttpResponse(template.render(context, request))

def formvol(request):
    template = loader.get_template('formvol.html')

    context = {}

    return HttpResponse(template.render(context, request))
