import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { meals } from './schemas/meals.schema';
import mongoose from 'mongoose';
import { Query as ExpressQuery} from 'express-serve-static-core'
@Injectable()
export class MealsService {
    constructor(
        @InjectModel(meals.name)
        private mealsModel:mongoose.Model<meals>
    ) {}
    async findAll(): Promise<number>{
        const count= await this.mealsModel.countDocuments()
        return count;
    }
    async findQuery(query: ExpressQuery): Promise<meals[]>{
        const resPerPage=2
        const currentpage=Number(query.page) || 1
        const skip=resPerPage*(currentpage-1)
        const keyword =query.keyword ? {
            labels:
            {
                $elemMatch:
                {
                $regex :query.keyword,
                $options: 'i'
                }
            }
        }:{}
        const meal= await this.mealsModel.find({...keyword}).limit(resPerPage).skip(skip);
        return meal;
    }
}
