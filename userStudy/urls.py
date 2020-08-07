from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.preSurvey, name='preSurvey'),
    url('information', views.info, name="information"),
    url('task', views.task, name='task'),
    url('postSurvey', views.postSurvey, name='postSurvey'),
    url('finish', views.finish, name='finish'),
    url('saveData', views.saveData, name="saveData"),
    url('logData', views.logData, name="logData")
]