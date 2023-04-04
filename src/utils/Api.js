import axios from 'axios';

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  getPosts() {
    return axios.get(`${this.baseUrl}/posts?_embed&per_page=100`);
  }

  getCategories() {
    return axios.get(`${this.baseUrl}/categories`);
  }

  getCategory(slug) {
    return axios.get(`${this.baseUrl}/categories?slug=${slug}`);
  }

  getCategoryPosts(id) {
    return axios.get(`${this.baseUrl}/posts?_embed&categories=${id}`);
  }
}

export const mainApi = new Api({
  baseUrl: 'http://localhost/davydova-theme/index.php/wp-json/wp/v2',
  // baseUrl: 'https://stasvohmyanin.site/wp-json/wp/v2',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});