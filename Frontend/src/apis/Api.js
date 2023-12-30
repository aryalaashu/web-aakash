import axios from "axios";

const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers :{
        "Content-Type" : "multipart/form-data",
    }
})

// make seperate header for authorization
const token = localStorage.getItem('token')

const config = {
    headers:{
        'authorization' : `Bearer ${token}`
    }
}

export const testApi = () => Api.get("/test")
// http://localhost:5000/test

// create user api
export const createUserApi = (data) => Api.post('/api/user/create', data)

// Login user Api
export const loginUserApi = (data) =>  Api.post('/api/user/login', data)

// Create product API
export const createProductApi = (data) => Api.post('/api/product/create_product', data, config)

// get all products
export const getAllProductsApi = () => Api.get('/api/product/get_products')

// get single product api

export const getSingleProductApi = (id) => Api.get(`/api/product/get_products/${id}`)

// update product API with ID
export const updateProductAPI = (id, formData) => Api.put(`/api/product/update_product/${id}`, formData, config)

// delete product with id
export const deleteProductAPI = (id) => Api.delete(`/api/product/delete_product/${id}`, config)

