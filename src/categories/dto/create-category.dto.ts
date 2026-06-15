import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    nombre!: string
    @IsString()
    @IsNotEmpty()
    description!: string
    @IsBoolean()
    @IsNotEmpty()
    active!: string
}
