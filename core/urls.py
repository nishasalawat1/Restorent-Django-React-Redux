from django.urls import path
from .views import current_user

urlpatterns = [
    path('', current_user),
    # path('users', UserList.as_view())
]