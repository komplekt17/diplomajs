import Unsplash, { toJson } from "unsplash-js";

// https://unsplash.com/oauth/applications/10381

// Создаем экземпляр объекта для доступа к API
const unsplash = new Unsplash({
  // Application ID из настроек вашего приложения
  applicationId:
    "8b304f2104e7394c1a13751e65223fec24a86aa32f974953dc0f4634c28e4e9b",
  // Application Secret из настроек вашего приложения
  secret: "6b338b013c7d2d927bd055c83d422d775531d9ea0916a006b2a9c5c3180b31a3",
  // Полный адрес страницы авторизации приложения (Redirect URI)
  // Важно: этот адрес обязательно должен быть указан в настройках приложения на сайте Unsplash API/Developers
  callbackUrl: "http://localhost:3000"
});

// Генерируем адрес страницы аутентификации на unsplash.com
// и указываем требуемые разрешения (permissions)
export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes",
  "read_user",
  "write_user",
  "read_photos"
]);

export const setAccessTokenUnplash = code => {

  unsplash.auth
    .userAuthentication(code)
    .then(res => res.json())
    .then(json => {
      sessionStorage.setItem("token", json.access_token);
    });

};

export const getPhotographerPhotos = (username, page, per_page, sorting) => {

  return unsplash.users
    .photos(username, page, per_page, sorting, true)
    .then(res => res.json());
}

export const getSearchPhotos = (searchQwery, page, per_page) => {

  return unsplash.search
    .photos(searchQwery, page, per_page)
    .then(res => res.json());
}

export const getStatsTotal = () => {

  return unsplash.stats
    .total()
    .then(res => res.json());
}

export const getProfileCurrentUser = () => {

  const token = sessionStorage.getItem("token");
  unsplash.auth.setBearerToken(token);

  return unsplash.currentUser
    .profile()
    .then(res => res.json());
}

export const updateProfileCurrentUser = (objProfile) => {

  unsplash.currentUser
    .updateProfile(objProfile)
    .then(toJson)
    .then(json => {console.log(objProfile)});

}

export const getlistPhoto = (page, per_page, sorting) => {

  const token = sessionStorage.getItem("token");
  unsplash.auth.setBearerToken(token);

  return unsplash.photos
    .listPhotos(page, per_page, sorting)
    .then(res => res.json());
};

export const getProfilePhotographer = (username) => {

  return unsplash.users
    .profile(username)
    .then(res => res.json());
}

export const getPhotoDetails = (idPhoto) => {

  return unsplash.photos
    .getPhoto(idPhoto)
    .then(res => res.json());
}

export const getPhotoStats = (idPhoto) => {

  return unsplash.photos
    .getPhotoStats(idPhoto)
    .then(res => res.json());
}

export const likePhoto = (id, token) => {
  unsplash.auth.setBearerToken(token);

  unsplash.photos
    .likePhoto(id)
    .then(toJson)
    .then(json => {});
};

export const disLikePhoto = (id, token) => {
  unsplash.auth.setBearerToken(token);

  unsplash.photos
    .unlikePhoto(id)
    .then(toJson)
    .then(json => {});
};
