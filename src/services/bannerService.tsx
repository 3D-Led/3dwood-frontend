import axios from "axios";


export const axiosInstace = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_BASE_URL}`
})
export class BannerService{

    async getAll(){
        return axiosInstace.get("/banner")
    }
}