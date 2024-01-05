import { Controller, Get, Query } from '@nestjs/common';
import { MealsService } from './meals.service';
import { meals } from './schemas/meals.schema';
import { Query as ExpressQuery} from 'express-serve-static-core'
@Controller('meals')
export class MealsController {
    constructor(private mealsService: MealsService){}
    @Get('/count')
    async getallMeals():Promise<number>
    {
        return this.mealsService.findAll()
    }
    @Get('/query')
    async getqueryMeals(@Query() query: ExpressQuery):Promise<meals[]>
    {
        return this.mealsService.findQuery(query);
    }
}
