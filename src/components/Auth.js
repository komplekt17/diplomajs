//import React, { Component } from 'react'
// Подключаем библиотеку unsplash-js
// (при настроенной webpack-сборке)
import Unsplash from 'unsplash-js';

// Создаем экземпляр объекта для доступа к API 
const unsplash = new Unsplash({
  applicationId: "8b304f2104e7394c1a13751e65223fec24a86aa32f974953dc0f4634c28e4e9b",
  secret: "6b338b013c7d2d927bd055c83d422d775531d9ea0916a006b2a9c5c3180b31a3",
  callbackUrl: "http://www.skart-info.ru/myProjects/diplomajs/auth"
});

// Считываем GET-параметр code из URL
// www.example.com/auth?code=abcdef123456...
const code = location.search.split('code=')[1];

// Если код передан, отправляем запрос на получение токена
if (code) {
  unsplash.auth.userAuthentication(code)
    .then(res => res.json())
    .then(json => {
      // Сохраняем полученный токен
      unsplash.auth.setBearerToken(json.access_token);

      // Теперь можно сделать что-то от имени пользователя
      // Например, поставить лайк фотографии
      unsplash.photos.likePhoto("kBJEJqWNtNY");
    });
}