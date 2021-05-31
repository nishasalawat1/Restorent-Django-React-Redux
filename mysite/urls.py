
from django.contrib import admin
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter
from core.views import RestorantViewset,UserViewSet


router = DefaultRouter()
router.register(r'resto', RestorantViewset, basename='resto')
router.register(r'user', UserViewSet, basename="user")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('token-auth/', obtain_jwt_token),
    path('core/', include("core.urls")),
    path('api/', include(router.urls)),
]
