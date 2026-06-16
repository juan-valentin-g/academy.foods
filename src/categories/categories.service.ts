import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);

  }

  async findAll() {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findOne(id: number) {
      const category = await this.categoryRepository.findOneBy({ id });
      if(!category) {
        throw new NotFoundException(`Categoría con el id ${id} no encontrada.`)
      }
      return category;
    }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
      const category = await this.findOne(id);
      const updateCategory = this.categoryRepository.merge(category, updateCategoryDto);
  
      return this.categoryRepository.save(updateCategory);
    }

  async remove(id: number) {
    const category = await this.findOne(id);
    await this.categoryRepository.delete(id);
    return {message: `Categoría con el id ${id} eliminada.`}
  }
}
