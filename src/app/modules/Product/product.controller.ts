import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.service";
import noDataFoundResponse from "../../utils/noDataFoundResponse";

const createProduct = catchAsync(async (req, res) => {
    const payload = req.body;
    const result = await ProductServices.createProductIntoDB(payload);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product created successfully',
        data: result,
    });
});

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductsFromDB(req.query);

    if(result?.result?.length < 1){
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
            message: 'Products retrieved successfully',
            data: result,
        });
    }
});

const getSingleProduct = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await ProductServices.getSingleProductFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product retrieved successfully',
        data: result,
    });
});

const getAllProductsAsCategory = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await ProductServices.getAllProductsAsCategoryFromDB(id);

    if(result.length < 1){
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
            message: 'Products retrieved successfully',
            data: result,
        });
    }
});

const updateProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.updateProductIntoDB(id, req.body);

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
            message: 'Product updated successfully',
            data: result,
        });
    }
});

const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.deleteProductFromDB(id);

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
            message: 'Product deleted successfully.',
            data: result,
        });
    }
});

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getAllProductsAsCategory,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};

