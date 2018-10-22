//API Key: 4eaf5b0fb0c5bcd2ed250f9f47b02988 
// Search: https://www.food2fork.com/api/search
// Get: https://www.food2fork.com/api/get 
// CrossOrigin: https://crossorigin.me/
import axios from 'axios';
import { key } from '../config';

export default class Search {
  constructor (query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
    } catch(error) {
      alert(error);
    }
  }
}