import axios from "axios"

export const getTours = async (page:number, limit:number,country:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/get-tour?page=${page}&limit=${limit}&search=&filter=&sort=asc&country=${country}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const getTourBySlug = async (slug:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/specific/${slug}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const getTourTypes = async () => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/get-all-tour-types`)
        return res.data
    }catch(err){
        console.log(err)
    }
}