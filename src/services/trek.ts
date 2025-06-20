import axios from "axios"

export const getTreks = async (page:number, limit:number,country:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/trek/get-all?page=${page}&limit=${limit}&search=&filter=&sort=asc&country=${country}&activation=active`)
        return res.data
    }catch(err){
        console.error(err)
    }
}
export const getTrekBySlug = async (slug:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/trek/specific/${slug}`)
        return res.data
    }catch(err){
        console.error(err)
    }
}