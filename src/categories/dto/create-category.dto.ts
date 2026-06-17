import { IsBoolean, IsNotEmpty, IsString } from "class-validator"
import { Food } from "src/foods/entities/food.entity"

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string
    @IsString()
    @IsNotEmpty()
    description!: string
    @IsBoolean()
    @IsNotEmpty()
    active!: boolean
    //@IsNotEmpty()
    //foods!: Food[]
}
