import * as api from '../api';

export const loadState = () => {
  const localAlbums = localStorage.getItem('albums');
    const localPhotos = localStorage.getItem('photos');
    const localUsers = localStorage.getItem('users');
    var albums = null, photos = null, users = null;

    if(localAlbums && localPhotos){
      albums = JSON.parse(localAlbums);
      photos = JSON.parse(localPhotos);
      users = JSON.parse(localUsers);

    } else{
      albums = api.getAlbums();
      photos = api.getPhotos();
      users = {
          user1:{
            username: "mihai",
            password: "parola1234"
          },
          user2:{
            username: "alex",
            password: "pass2"
          }
        }
    }

    return {
      albums: albums,
      photos: photos,
      users: users,
    }

}

export const saveState = (itemName, state) => {
  
  console.log("saveState: ", itemName, state);
  localStorage.setItem(itemName, JSON.stringify(state));

}