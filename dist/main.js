"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'));
    app.setBaseViewsDir(path_1.join(__dirname, 'views'));
    app.setViewEngine('hbs');
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Exames API ')
        .setDescription('API responsável por gerenciar a segurança das novas APIs e APPs')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = app.get('ConfigService').get('PORT') || 5000;
    await app.listen(port);
    logger.log('Server running on port: ' + port);
}
bootstrap();
//# sourceMappingURL=main.js.map