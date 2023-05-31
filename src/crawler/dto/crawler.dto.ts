
import { ApiProperty } from '@nestjs/swagger';

export class CrawlerDtoCreate {
  @ApiProperty({ description: "URL", example: "https://www.hungryapp.co.kr/bbs/bbs_view.php?pid=182975&bcode=arknightskor&page=4" })
  url!: string;

  @ApiProperty({
    description: "Target Characters", example: ["스카디 더 커럽팅 하트", "스펙터 디 언체인드", "텍사스 디 오메르토사", "니어 더 래디언트 나이트"]
  })
  targetCharacters!: string[];
}