import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://mongoUser:wc4S1NLpVHrsPESQ@cluster0.tvtuj.mongodb.net/nest-mongodb?retryWrites=true&w=majority') ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
