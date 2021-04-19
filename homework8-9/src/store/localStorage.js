import * as api from '../api';

export const loadState = () => {
  const localAlbums = localStorage.getItem('albums');
    const localPhotos = localStorage.getItem('photos');
    const users = localStorage.getItem('users');

    if(localAlbums && localPhotos){
      this.setState({
        albums: JSON.parse(localAlbums),
        photos: JSON.parse(localPhotos),
        users: JSON.parse(users),
      });

    } else{
      this.setState({
        albums: api.getAlbums(),
        photos: api.getPhotos(),
        users: {
          user1:{
            username: "mihai",
            password: "parola1234"
          },
          user2:{
            username: "alex",
            password: "pass2"
          }
        }
      });
    }

}

export const saveState = (itemName, state) => {
  
  localStorage.setItem(itemName, JSON.stringify(state));

}