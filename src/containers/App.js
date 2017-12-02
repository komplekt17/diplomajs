import React, { Component } from 'react';
// Подключаем библиотеку unsplash-js
// (при настроенной webpack-сборке)
import Unsplash from 'unsplash-js';

	
class App extends Component {
	
	constructor(props) {
		super(props);
			
		// Создаем экземпляр объекта для доступа к API
		const unsplash = new Unsplash({
		  // Application ID из настроек вашего приложения
		  applicationId: "8b304f2104e7394c1a13751e65223fec24a86aa32f974953dc0f4634c28e4e9b",
		  // Application Secret из настроек вашего приложения
		  secret: "6b338b013c7d2d927bd055c83d422d775531d9ea0916a006b2a9c5c3180b31a3",
		  // Полный адрес страницы авторизации приложения (Redirect URI)
		  // Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers 
		  callbackUrl: "http://www.skart-info.ru/myProjects/diplomajs/"
		});

		// Генерируем адрес страницы аутентификации на unsplash.com
		// и указываем требуемые разрешения (permissions)
		const authenticationUrl = unsplash.auth.getAuthenticationUrl([
		  "public",
		  "write_likes"
		]);	

		// Считываем GET-параметр code из URL
		// www.example.com/auth?code=abcdef123456...
		const code = location.search.split('code=')[1];
		
		}
	
	render(){
		// Если код передан, отправляем запрос на получение токена
		if (this.code) {
			unsplash.auth.userAuthentication(this.code)
				.then(res => res.json())
				.then(json => {
					// Сохраняем полученный токен
					unsplash.auth.setBearerToken(json.access_token);
				});

			// Теперь можно сделать что-то от имени пользователя
			this.photos();
		}

		// Если кода нет, отправляем пользователя на аутентификацию
		else{	
			location.assign(this.authenticationUrl);
		}
	}

	photos() {
		console.log("\nPhotos");

		unsplash.photos.listPhotos(1, 10, "latest")
			.then(res => res.json())
			.then(json => {
				console.log(json);
				
				return (
					<div>
						{
							json.map(foto => {
								return (
									<div key={foto.id} className="col-md-4 comment">
										<div className="com-span-1">
											<div className="com-name"> {foto.user.name} </div>
											<div className="com-date"> {foto.updated_at} </div>
										</div>
										<div className="text"> {foto.text} 
											<img src={foto.html} />
										</div>
									</div>
								);
							})
						}
					</div>
				);
			});
		}
}

export default App;