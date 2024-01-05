import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MealsModule } from './meals/meals.module';
import { ConfigModule } from '@nestjs/config';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:'.env',isGlobal:true})
  ,MongooseModule.forRoot(process.env.DB_URI)
  ,MealsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
