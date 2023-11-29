export type CategoryData = {
  _id?: string;
  createdbyId: string;
  name: string;
  active?: boolean;
  description?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type CategorPaginated = {
  category: CategoryData[];
  total: number;
};

export class CategoryEntity {
  createdbyId: string;
  name: string;
  active?: boolean;
  description?: string;
  image?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data: CategoryData) {
    this.createdbyId = data.createdbyId;
    this.name = data.name;
    this.active = false;
    this.description = data.description;
    this.image = data.image;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
