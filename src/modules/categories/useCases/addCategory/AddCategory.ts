import { CategoryData, CategoryEntity } from '../../entities/CategoryEntity';
import { AddCategoryRepository } from '../../repositories/contracts/AddCategoryRepository';

export type AddCategory = (data: CategoryData) => Promise<CategoryEntity | null>;
export type AddCategorySignature = (addCategory: AddCategoryRepository) => AddCategory;

export const AddCategory =
  (addCategoryRepository: AddCategoryRepository) => (data: CategoryData) => {
    return addCategoryRepository.addCategory(new CategoryEntity(data));
  };
