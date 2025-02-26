import axios from "axios"

export const getTours = async (page:number, limit:number) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/get/selected`)
        return res.data
    }catch(err){
        console.log(err)
    }
}