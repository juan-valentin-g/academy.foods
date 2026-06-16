import { IsNotEmpty, IsNumber, IsString } from "class-validator"
import { Category } from "src/categories/entities/category.entity"

export class CreateFoodDto {
    @IsString()
    @IsNotEmpty()
    name!: string
    @IsString()
    @IsNotEmpty()
    description!: string
    @IsNumber()
    @IsNotEmpty()
    price!: number
    @IsString()
    @IsNotEmpty()
    image!: string
    @IsNotEmpty()
    category!: Category
}