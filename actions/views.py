from infographic.models import Infographic
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
    inf_price = Infographic.objects.get(pk=1)
    
    context = {
        "education": education,
        "sports": sports,
        "culture": culture,
        "food": food,
        "updates": updates[:5],
        "inf_price": inf_price.price
    }

    return HttpResponse(template.render(context, request))

def formvol(request):
    template = loader.get_template('formvol.html')

    context = {}

    return HttpResponse(template.render(context, request))

def formact(request):
    template = loader.get_template('formact.html')

    context = {}

    return HttpResponse(template.render(context, request))

def feedback(request):
    template = loader.get_template('feedback.html')

    context = {}

    return HttpResponse(template.render(context, request))
