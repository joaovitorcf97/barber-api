import { Query } from '@/application/types/query';
import { CategoryData } from '../../entities/CategoryEntity';

export interface LoadCategoryRepository {
  loadCategory(query: Query): Promise<CategoryData | null>;
}
