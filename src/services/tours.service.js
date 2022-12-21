import axios from 'axios';

export const toursApi = {
  getTours: () => {
    const url = 'https://www.natours.dev/api/v1/tours';
    return axios.get(url);
  },
};
