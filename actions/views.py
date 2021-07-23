from django.http.response import HttpResponse, HttpResponseRedirect, HttpResponseRedirectBase
from django.urls import reverse
from django.shortcuts import redirect, render
from django.template import loader
from actions.models import Action


def index(request):
    template = loader.get_template('index.html')

    actions = Action.objects.all()
    context = {
        "actions": actions
    }

    return HttpResponse(template.render(context, request))
