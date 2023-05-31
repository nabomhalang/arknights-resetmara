import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as cheerio from 'cheerio';

@Injectable()
export class CrawlerService {
  async getCrawler(url: string, targetCharacters: string[]): Promise<any> {
    let result = "";

    try {
      const response = await axios.get(url);
      const html = await response.data;
      const $ = cheerio.load(html);

      const trElements = $('tr');

      trElements.each((_, trElement) => {
        const tdElement = $(trElement).find('td').first();
        const text = tdElement.text();
        const containsAllCharacters = targetCharacters.every((character) => text.includes(character));
        if (containsAllCharacters) result += `${$.html(trElement)}`;
      });

      if (result.length === 0) return {
        c: 200,
        m: 'No result'
      }
      return {
        c: 200,
        m: result
      }
    } catch (error) {
      return error.message;
    }
  }
}
