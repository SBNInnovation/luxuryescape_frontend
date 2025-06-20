import axios from "axios"

export const getFine = async (page:number, limit:number,location:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/finedining/get-all-details?page=${page}&limit=${limit}&search=&country=${location}`)
        return res.data
    }catch(err){
        console.error(err)
    }
}

export const getFineBySlug = async (slug:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/finedining/get/${slug}`)
        return res.data
    }catch(err){
        console.error(err)
    }
}


