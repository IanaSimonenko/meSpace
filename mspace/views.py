from django.shortcuts import render

def post_list(request):
    return render(request, 'mspace/post_list.html', {})
