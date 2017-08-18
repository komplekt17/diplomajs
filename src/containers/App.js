// Подключаем библиотеку unsplash-js
// (при настроенной webpack-сборке)
import Unsplash from 'unsplash-js';

	// Создаем экземпляр объекта для доступа к API
	const unsplash = new Unsplash({
	  // Application ID из настроек вашего приложения
	  applicationId: "8b304f2104e7394c1a13751e65223fec24a86aa32f974953dc0f4634c28e4e9b",
	  // Application Secret из настроек вашего приложения
	  secret: "6b338b013c7d2d927bd055c83d422d775531d9ea0916a006b2a9c5c3180b31a3",
	  // Полный адрес страницы авторизации приложения (Redirect URI)
	  // Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers 
	  callbackUrl: "http://www.skart-info.ru/myProjects/diplomajs/auth"
	});

	// Генерируем адрес страницы аутентификации на unsplash.com
	// и указываем требуемые разрешения (permissions)
	const authenticationUrl = unsplash.auth.getAuthenticationUrl([
	  "public",
	  "write_likes"
	]);

	// Отправляем пользователя по этому адресу
	location.assign(authenticationUrl);