import axios from "axios"

export const getAccoms = async (page:number, limit:number,location:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-all-details?page=${page}&limit=${limit}&search=&location=${location}&sort=asc`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const getAccomBySlug = async (slug:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-by/${slug}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}