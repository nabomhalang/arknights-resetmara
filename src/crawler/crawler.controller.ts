import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CrawlerDtoCreate } from './dto/crawler.dto';
import { CrawlerService } from './crawler.service';

@ApiTags('Arknights Crawler')
@Controller('arknights')
export class CrawlerController {

  constructor(private readonly crawlerService: CrawlerService) { }

  @Post('crawler')
  @ApiOperation({ summary: 'Crawler', description: '헝그리앱의 ReseShop분의 명방 리세계를 기준으로 Body에 url과 원하는 target character를 배열형태로 보내주면 그 캐릭터들이 전부 있는 걸로 반환해주는 API입니다.' })
  @ApiCreatedResponse({ description: '성공시 200과 함께 결과를 반환합니다.', type: CrawlerDtoCreate })
  @ApiBody({ type: CrawlerDtoCreate })
  async getHello(@Body('url') url: string, @Body('targetCharacters') targetCharacters: string[]): Promise<any> {
    return this.crawlerService.getCrawler(url, targetCharacters);
  }
}
