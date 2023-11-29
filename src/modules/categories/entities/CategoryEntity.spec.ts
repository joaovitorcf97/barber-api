import MockDate from 'mockdate';
import { CategoryEntity } from './CategoryEntity';

export const fakeCateggoryEntiry = {
  _id: '123acb',
  createdbyId: 'abc',
  name: 'Fake Name',
  active: true,
  description: 'desctiption here...',
  image: 'image_here',
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const fakeCategoryPaginated = {
  total: 11,
  categories: [
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
    fakeCateggoryEntiry,
  ],
};

describe('Category', () => {
  beforeAll(async () => {
    MockDate.set(new Date());
  });

  afterAll(async () => {
    MockDate.reset();
  });

  it('can be created', () => {
    const obj = new CategoryEntity(fakeCateggoryEntiry);

    expect(obj).toBeTruthy();
    expect(obj).toEqual({
      ...fakeCateggoryEntiry,
      _id: undefined,
      active: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  });
});
