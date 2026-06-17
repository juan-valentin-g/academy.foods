import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Injectable()
export class FoodsService {

  constructor(
    @InjectRepository(Food)
    private foodRepository: Repository<Food>,

    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ) {}

  async create(createFoodDto: CreateFoodDto) {
    const category = await this.categoryRepository.findOneBy({id: createFoodDto.category});
    if(!category) throw new NotFoundException("Categoria no encontrada.");

    const food = this.foodRepository.create({...createFoodDto, category});
    return await this.foodRepository.save(food);
  }

  async findAll() {
    const foods = await this.foodRepository.find();
    return foods;
  }

  async findOne(id: number) {
    const food = await this.foodRepository.findOneBy({ id });
    if(!food) {
      throw new NotFoundException(`Comida con el id ${id} no encontrado.`)
    }
    return food;
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const category = await this.categoryRepository.findOneBy({ id: updateFoodDto.category });
    if(!category) throw new NotFoundException('Categoria No Encontrada.')

    const food = await this.foodRepository.findOneBy({id});
    if(!food) {
      throw new NotFoundException(`Comida no encontrada.`)
    }
    const updateFood = this.foodRepository.merge(food, {...updateFoodDto, category});

    return this.foodRepository.save(updateFood);
  }

  async remove(id: number) {
    const food = await this.foodRepository.findOneBy({ id });
    if(!food) {
      throw new NotFoundException(`Comida con el id ${id} no encontrado.`)
    }
    await this.foodRepository.delete(id);
    return {message: `Comida con el id ${id} eliminada.`}
  }
}
