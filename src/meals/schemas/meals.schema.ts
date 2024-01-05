import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum label {
    pork='pork',
    seafood='seafood',
    kids='kids',
    chicken='chicken',
    beef='beef',
    vegetarian='vegetarian',
    breakfast='breakfast'
}
@Schema({
    timestamps : true
})

export class meals{
    @Prop()
    id:string;
    @Prop()
    title:string;
    @Prop()
    starter:string;
    @Prop()
    desert:string;
    @Prop()
    price:number;
    @Prop()
    labels:[String];
    @Prop()
    img:string;
    @Prop()
    drinks:[Object];
}

export const MealsSchema=SchemaFactory.createForClass(meals)