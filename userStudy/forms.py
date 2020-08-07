from django import forms
from .models import Answer

class InfoForm(forms.ModelForm):
    class Meta:
        model = Answer
        fields = ['age', 'gender', 'employee', 'income', 'frequency', 'situation', 'coupang', 'control',
                  'ibt1', 'ibt2', 'ibt3', 'ibt4', 'ibt5', 'imp1', 'imp2', 'imp3', 'imp4',
                  'sus1', 'sus2', 'sus3', 'sus4', 'sus5', 'sus6', 'sus7', 'sus8', 'sus9', 'sus10', 'sus11', 'sus12']

class TaskForm(forms.ModelForm):
    class Meta:
        model = Answer
        fields = ['task']

class PostForm(forms.ModelForm):
    class Meta:
        model = Answer
        exclude = ['age', 'gender', 'employee', 'income', 'frequency', 'situation', 'coupang', 'control',
                  'ibt1', 'ibt2', 'ibt3', 'ibt4', 'ibt5', 'imp1', 'imp2', 'imp3', 'imp4',
                  'sus1', 'sus2', 'sus3', 'sus4', 'sus5', 'sus6', 'sus7', 'sus8', 'sus9', 'sus10', 'sus11', 'sus12',
                   'ub1_1', 'ub1_2', 'ubi2_1', 'ubi2_2', 'salientCost', 'distraction',
                   'reflectionAns1', 'reflectionAns2', 'reflectionAns3', 'desireAns1', 'desireAns2']