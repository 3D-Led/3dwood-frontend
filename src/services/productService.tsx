import axios from "axios";

export const axiosInstace = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`
})

export class ProductService{

    getAll(){
        return axiosInstace.get("")
    }

    getProductsLaunch(){
        return axiosInstace.get("/launch")
    }
    getProductsCategory(category: string){
        return axiosInstace.get(`/category?category=${category}`)
    }
    getById(id: number){
        return axiosInstace.get(`/${id}`);
    }

}