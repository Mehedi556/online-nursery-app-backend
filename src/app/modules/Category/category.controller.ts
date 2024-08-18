import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CategoryServices } from "./category.service";
import noDataFoundResponse from "../../utils/noDataFoundResponse";

const createCategory = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await CategoryServices.createCategoryIntoDB(payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category created successfully',
        data: result,
    });
});

const getAllCategories = catchAsync(async (req, res) => {
    const result = await CategoryServices.getAllCategoriesFromDB();

    if(result?.length < 1){
        noDataFoundResponse(res, {
            success: false,
            statusCode: 404,
            message: "No Data Found",
            data: result
        })
    } else{
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Categories retrieved successfully',
            data: result,
        });
    }
});

const updateCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CategoryServices.updateCategoryIntoDB(id, req.body);

    if(!result){
        noDataFoundResponse(res, {
            success: false,
            statusCode: 404,
            message: "No Data Found",
            data: result
        })
    } else{
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Category updated successfully',
            data: result,
        });
    }
});

const deleteCategory = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CategoryServices.deleteCategoryFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Category deleted successfully.',
        data: result,
    });
});

export const CategoryControllers = {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory,
};