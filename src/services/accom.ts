import axios from "axios"

export const getAccoms = async (page:number, limit:number) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-all-accommodation?page=${page}&limit=${limit}&search=&location=&sort=asc`)
        return res.data
    }catch(err){
        console.log(err)
    }
}