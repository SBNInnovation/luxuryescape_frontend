import axios from "axios"


export const userSearch=async(query:string|null)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/all-search?q=${query}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}