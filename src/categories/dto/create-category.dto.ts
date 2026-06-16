import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

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
}
