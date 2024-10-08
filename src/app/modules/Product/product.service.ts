
import QueryBuilder from "../../builder/QueryBuilder";
import { productSearchableFields } from "./product.constant";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductIntoDB = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
  };

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query).search(productSearchableFields).filter().sort().paginate().fields();

  const result = await productQuery.modelQuery;
  const meta = await productQuery.countTotal()

  return {
    result,
    meta
  };
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById({_id: id});
  return result;
};

const getAllProductsAsCategoryFromDB = async (id: string) => {
  const result = await Product.find({ category: id });
  return result;
};

const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
    const result = await Product.findByIdAndUpdate(
      id,
      payload,
      {
        new: true,
      },
    )
    return result;
  };

const deleteProductFromDB = async (id: string) => {
    const result = await Product.findByIdAndDelete(id, {new: true})
    return result;
};

export const ProductServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSingleProductFromDB,
    getAllProductsAsCategoryFromDB,
    updateProductIntoDB,
    deleteProductFromDB
};