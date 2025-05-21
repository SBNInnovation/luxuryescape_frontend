import axios from "axios"

export const getDestinations=async(page=1,limit=1000)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/destinations?page=${page}&limit=${limit}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}

export const getDestinationBySlug=async(slug:string)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/destination/get/${slug}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}