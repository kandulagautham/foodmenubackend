import { Module } from '@nestjs/common';
import { MealsController } from './meals.controller';
import { MealsService } from './meals.service';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { MealsSchema } from './schemas/meals.schema';

@Module({
  imports: [MongooseModule.forFeature([{name :'meals',schema: MealsSchema}])],
  controllers: [MealsController],
  providers: [MealsService]
})
export class MealsModule {}
