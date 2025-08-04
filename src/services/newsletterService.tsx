import axios from "axios";


export const axiosInstace = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_BASE_URL}`
})
export class NewsLetterService{

    async insert(data: {name : string, email: string}){
        return axiosInstace.post("/newsletter", data)
    }
}