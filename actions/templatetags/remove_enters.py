from django import template

register = template.Library()

@register.filter
def remove_enters(value):
    return value.replace('\r\n', ';;;')