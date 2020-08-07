from django.shortcuts import render
from .forms import InfoForm, TaskForm, PostForm
from .models import Answer
import json
import logging, logging.handlers
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

import logging
# Create your views here.
ubi1_list = []
ubi2_list = []
salientCost = ''
distraction = 0
desire_list = []
reflect_list = []

log_result = {"click": [], "scroll": 0, "url": []}
url_before = ""

@csrf_exempt
def Master(request):
    global log_result
    log_result = {"click": [], "scroll": 0, "url": []}
    return render(request, 'Master.html', {})

@csrf_exempt
def preSurvey(request):
    if not request.session.session_key:
        request.session.create()
    session_id = request.session.session_key
    context = {}
    context['session_id'] = session_id
    form = InfoForm()
    return render(request, 'Master.html', {'form' : form})

@csrf_exempt
def info(request):
    if request.method == 'POST':
        #save information
        form = InfoForm(request.POST)
        if form.is_valid():
            session_id = request.session.session_key
            num_results = Answer.objects.filter(session_id=session_id).count()

            #if num_results > 0:
            #    return render(request, 'prolific/already.html')

            answer = Answer(session_id=session_id)
            answer.age = form.cleaned_data["age"]
            answer.gender = form.cleaned_data["gender"]
            answer.employee = form.cleaned_data['employee']
            answer.income = form.cleaned_data['income']
            answer.frequency = form.cleaned_data["frequency"]
            answer.situation = form.cleaned_data['situation']
            answer.control = form.cleaned_data['control']
            answer.coupang = form.cleaned_data['coupang']
            answer.save()
            answer.ibt1 = form.cleaned_data['ibt1']
            answer.ibt2 = form.cleaned_data['ibt2']
            answer.ibt3 = form.cleaned_data['ibt3']
            answer.ibt4 = form.cleaned_data['ibt4']
            answer.ibt5 = form.cleaned_data['ibt5']

            answer.imp1 = form.cleaned_data['imp1']
            answer.imp2 = form.cleaned_data['imp2']
            answer.imp3 = form.cleaned_data['imp3']
            answer.imp4 = form.cleaned_data['imp4']

            answer.sus1 = form.cleaned_data['sus1']
            answer.sus2 = form.cleaned_data['sus2']
            answer.sus3 = form.cleaned_data['sus3']
            answer.sus4 = form.cleaned_data['sus4']
            answer.sus5 = form.cleaned_data['sus5']
            answer.sus6 = form.cleaned_data['sus6']
            answer.sus7 = form.cleaned_data['sus7']
            answer.sus8 = form.cleaned_data['sus8']
            answer.sus9 = form.cleaned_data['sus9']
            answer.sus10 = form.cleaned_data['sus10']
            answer.sus11 = form.cleaned_data['sus11']
            answer.sus12 = form.cleaned_data['sus12']
            answer.save()
            response = render(request, 'Task.html')

            return response
        else:
            context = {}
            context["message"] = "Input is not valid"
            context["form"] = InfoForm()
            logging.info('invalid form')
            return render(request, 'information.html', context)
    else:
        context = {}
        context["message"] = "Input is not valid"
        context["form"] = InfoForm()
        return render(request, 'information.html', context)

@csrf_exempt
def task(request):
    global ubi1_list, ubi2_list, reflect_list, desire_list, salientCost, distraction

    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            session_id = request.session.session_key

            answer = Answer.objects.last()
            answer.task = form.cleaned_data['task']
            answer.salientCost = salientCost
            answer.reflectionAns1 = reflect_list[0]
            answer.reflectionAns2 = reflect_list[1]
            answer.reflectionAns3 = reflect_list[2]
            answer.distraction = distraction
            answer.desireAns1 = desire_list[0]
            answer.desireAns2 = desire_list[1]
            answer.ubi1_1 = ubi1_list[0]
            answer.ubi1_2 = ubi1_list[1]
            answer.ubi2_1 = ubi2_list[0]
            answer.ubi2_2 = ubi2_list[1]
            answer.save()
            return render(request, 'postSurvey.html')

        else:
            context = {}
            context['message'] = "Input is not valid"
            context['form'] = TaskForm()
            return render(request, 'task.html', context)
    else:
        context = {}
        context['message'] = "Input is not valid"
        context['form'] = TaskForm()
        return render(request, 'task.html', context)

@csrf_exempt
def postSurvey(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            session_id = request.session.session_key

            answer = Answer.objects.last()
            answer.funcS1 = form.cleaned_data['funcS1']
            answer.funcR1 = form.cleaned_data['funcR1']
            answer.funcP1 = form.cleaned_data['funcP1']
            answer.funcD1 = form.cleaned_data['funcD1']
            answer.funcS2 = form.cleaned_data['funcS2']
            answer.funcR2 = form.cleaned_data['funcR2']
            answer.funcP2 = form.cleaned_data['funcP2']
            answer.funcD2 = form.cleaned_data['funcD2']
            answer.funcRank1 = form.cleaned_data['funcRank1']
            answer.funcRank2 = form.cleaned_data['funcRank2']
            answer.funcRank3 = form.cleaned_data['funcRank3']
            answer.funcRank4 = form.cleaned_data['funcRank4']

            answer.prefS1 = form.cleaned_data['prefS1']
            answer.prefR1 = form.cleaned_data['prefR1']
            answer.prefP1 = form.cleaned_data['prefP1']
            answer.prefD1 = form.cleaned_data['prefD1']
            answer.prefS2 = form.cleaned_data['prefS2']
            answer.prefR2 = form.cleaned_data['prefR2']
            answer.prefP2 = form.cleaned_data['prefP2']
            answer.prefD2 = form.cleaned_data['prefD2']
            answer.prefRank1 = form.cleaned_data['prefRank1']
            answer.prefRank2 = form.cleaned_data['prefRank2']
            answer.prefRank3 = form.cleaned_data['prefRank3']
            answer.prefRank4 = form.cleaned_data['prefRank4']

            answer.useS1 = form.cleaned_data['useS1']
            answer.useR1 = form.cleaned_data['useR1']
            answer.useP1 = form.cleaned_data['useP1']
            answer.useD1 = form.cleaned_data['useD1']
            answer.useS2 = form.cleaned_data['useS2']
            answer.useR2 = form.cleaned_data['useR2']
            answer.useP2 = form.cleaned_data['useP2']
            answer.useD2 = form.cleaned_data['useD2']
            answer.useRank1 = form.cleaned_data['useRank1']
            answer.useRank2 = form.cleaned_data['useRank2']
            answer.useRank3 = form.cleaned_data['useRank3']
            answer.useRank4 = form.cleaned_data['useRank4']
            answer.save()
            return render(request, 'finish.html')

        else:
            context = {}
            context['message'] = "Input is not valid"
            context['form'] = TaskForm()
            return render(request, 'postSurvey.html', context)
    else:
        context = {}
        context['message'] = "Input is not valid"
        context['form'] = TaskForm()
        return render(request, 'postSurvey.html', context)


def finish(request):
    return render(request, "finish.html")

@csrf_exempt
def saveData(request):

    global ubi1_list, ubi2_list, reflect_list, desire_list, salientCost, distraction

    ubi1 = request.GET.get('ubi1', None)
    ubi2 = request.GET.get('ubi2', None)
    salient = request.GET.get('salientCost', None)
    reducingDesire = request.GET.get('reducingDesire', None)
    reflection = request.GET.get('reflection', None)
    distract_num = request.GET.get('distraction', None)

    ubi1_list = ubi1.split(',')
    ubi1_list[0] = int(ubi1_list[0])
    ubi1_list[1] = int(ubi1_list[1])
    ubi2_list = ubi2.split(',')
    ubi2_list[0] = int(ubi2_list[0])
    ubi2_list[1] = int(ubi2_list[1])
    reflect_list = reflection.split('//')
    reflect_list[1] = int(reflect_list[1][1])
    reflect_list[2] = reflect_list[2][1:]
    desire_list = reducingDesire.split('//')
    desire_list[1] = desire_list[1][1:]
    distraction = int(distract_num)
    salientCost = salient



    result = {
        "valid" : True
    }
    return JsonResponse(result)


@csrf_exempt
def logData(request):

    global log_result, url_before, scroll_before

    data = request.body.decode('utf8')
    data = json.loads(data)

    click = data['click']
    url = data['url']
    scroll = data['scroll']

    if (click != ""):
        log_result["click"].append(click)
    elif (url != "" or url != url_before):
        log_result["url"].append(url)
        url_before = url
    elif (scroll != 0):
        log_result["scroll"] += scroll

    print(log_result)

    result = {
        "valid" : True
    }
    return JsonResponse(result)