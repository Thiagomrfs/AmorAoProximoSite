from django.http.response import HttpResponse, HttpResponseRedirect, HttpResponseRedirectBase
from django.urls import reverse
from django.shortcuts import redirect, render
from django.template import loader
from actions.models import Action


def index(request):
    template = loader.get_template('index.html')

    actions = Action.objects.all()
    education = Action.objects.filter(category='EDU')
    sports = Action.objects.filter(category='ESP')
    culture = Action.objects.filter(category='CLT')
    food = Action.objects.filter(category='CNM')
    
    context = {
        "actions": actions,
        "education": education,
        "sports": sports,
        "culture": culture,
        "food": food
    }

    return HttpResponse(template.render(context, request))
