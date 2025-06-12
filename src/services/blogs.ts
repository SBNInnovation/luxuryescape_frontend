
import axios from "axios"

export const getBlogs = async (page:number, limit:number) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/blog/get-all?page=${page}&limit=${limit}&search=&filter=&sort=asc`)
        return res.data
    }catch(err){
        console.error(err)
    }
}