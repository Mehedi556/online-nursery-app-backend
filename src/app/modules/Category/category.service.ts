import { Category } from "./category.model";
import { TCategory } from "./category.interface";

const createCategoryIntoDB = async (payload: TCategory) => {
  const result = await Category.create(payload);
  return result;
};

const getAllCategoriesFromDB = async () => {
  const result = await Category.find().sort("-createdAt");
  return result;
};

const updateCategoryIntoDB = async (
  id: string,
  payload: Partial<TCategory>
) => {
  const result = await Category.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const deleteCategoryFromDB = async (id: string) => {
  const result = await Category.findByIdAndDelete(id, { new: true });
  return result;
};

export const CategoryServices = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};
