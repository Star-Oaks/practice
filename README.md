
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Задачи
Расурсы 

API gorest `https://gorest.co.in/`
Angular Material `https://material.angular.io/`
RXJS `https://webdraftt.com/tutorial/rxjs/operators-and-pipe`


Создать платформу с использованием Angular Material 

Необходимо наличие модулей: 

Модуль Login 
эмулировать вход пользователя на сайт, поля Email, Password с валидацией 
использовать Реактивные формы 
Пользователя хранить в сервисе реализации обращения к серверу не требуется 
после успешного входа выдавать пользователю Auth Token и закреплять его в LocalStorage перенаправить на Dashboard
*необходимо использовать Guard

Модуль Dashboard

Необходимо создать модуль Dashboard с роутингом 
при переходе редиректить пользователя на компонент Users 
в компоненте Users Получать всех юзеров выводить в виде карточек 
Реализовать возможность добавления новых пользователей 
реализовать пагинацию 
На карточке создать 2 кнопки View и Edit 
View - только просмотр и кнопка Posts - по которой редиректить на страницу конкретноно поста * об этом ниже
Edit - редактирование пользователя  
CreateNewUser - добавлять нового пользователя 
*эти три  компонента не сильно различаются

Модуль Posts
Необходимо создать модуль Posts с роутингом 
при переходе редиректить пользователя на компонент AllPosts 
в компоненте AllPosts Получать всех посты, выводить в виде списка с привью  
Реализовать возможность добавления новых постов 
реализовать пагинацию 
при клике на пост необходимо перейти на страницу поста CurrentPost иметь возможность редактировать пост,  перейти на карточку пользователя User, получить список всех комментариев 

Описать файл Readmy 

Залить на Git

Стили по вашему усмотрению

Контент должен отображатся корректно на десктопе, планшете, мобильном устройстве 

Оценки:
-Не очень
-Норм
-Похвально 
-Топчик
-Слушал(а) все что я говрил


## Задачи со звездочкой (*)

Покрыть все API функционалом подобного образа 
-todos
-products
-product-categories 
-categories