import { CategoryData } from '../../entities/CategoryEntity';

export interface AddCategoryRepository {
  addCategory(category: CategoryData): Promise<CategoryData | null>;
}
