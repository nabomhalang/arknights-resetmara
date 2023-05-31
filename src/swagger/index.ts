
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

/**
 * Swagger 세팅
 *
 * @param {INestApplication} app
 */
export function setupSwagger(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('Arknights crawlering API')
    .setDescription('헝그리앱에서 reseShop분을 기준으로 링크를 넣어주시면 해당 링크의 정보를 크롤링하여 반환해주는 API입니다.')
    .setVersion('1.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}