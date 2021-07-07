from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('addTodo', views.add_todo, name='add_todo'),
    #path('removeTodo/<int:todo_id>', views.remove_todo, name='remove_todo')
]