# Задание 1

## Уровень 1

В качестве инструмента для создания микрофронтендов выбран Webpack Module Federation, 
т.к. все микрофронтенды планируется разрабатывать на одном фреймфорке (React) и команда уже работала с webpack.

## Уровень 2

Проект разделен на 4 микрофронтенда: **auth**, **profile**, **places**, **host**

### Auth

Отвечает за авторизацию пользователя.

Экспортирует компонент `components/Auth.js`, который отображает email пользователя и регистрирует роуты для страниц входа и регистрации

### Profile

Отвечает за отображение и редактирования профиля текущего пользователя.

Экспортирует компонент `components/Profile.js`, который отображает профиль пользователя с возможностью редактирования.

### Places

Отвечает за управление местами - отображение, добавление, удаление, лайки.

### Host

Основной микрофронтенд, который запускает все приложение.

## ~~Уровень 3~~

# Задание 2

Решение в файле `arch_task2.drawio`




