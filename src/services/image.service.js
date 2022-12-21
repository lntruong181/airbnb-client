import axios from 'axios';

export const imageApi = {
  getImage: () => {
    const url = `https://api.unsplash.com/photos/random?client_id=OrWHB3ve9zrKojlyNkbklUPxbyYmai3fi2bxkqs1PFM`;
    return axios.get(url);
  },
  getImages: () => {
    const url = `https://api.unsplash.com/photos?client_id=OrWHB3ve9zrKojlyNkbklUPxbyYmai3fi2bxkqs1PFM`;
    return axios.get(url);
  },
};
