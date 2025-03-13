import axios from 'axios';

const axiosRequest = axios.create({
    baseURL: 'https://pixabay.com/api/',
});

export default function showGallary(searchText) {
  const options = {
    params: {
      key: '49099070-620059b7e04d01b51519094ba',
      q: searchText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };
  return axiosRequest.get('', options);
}

