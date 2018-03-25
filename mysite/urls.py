from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^api/', include('mspace.urls')),
    url(r'^api/mark_read/', include('mspace.urls')),
    url(r'^api/get_messages/', include('mspace.urls')),
    url(r'^admin/', admin.site.urls),
]