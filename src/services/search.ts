import axios from "axios"


export const userSearch=async(query:string|null,page:number,limit:number)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/all-search?q=${query}&page=${page}&limit=${limit}`)
        return res.data
    }catch(err){
        console.log(err)
    }
}