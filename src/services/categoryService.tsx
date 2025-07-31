import axios from "axios";
import { Category } from "@/types/Category";

export const axiosInstace = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_BASE_URL}`
})
export default class CategoryService{

    async getAll(){
        return axiosInstace.get("/category")
    }
}