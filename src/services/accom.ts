import axios from "axios"

export const getAccoms = async (page:number, limit:number,location:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-all-details?page=${page}&limit=${limit}&search=&country=${location}&sort=asc`)
        return res.data
    }catch(err){
        console.error(err)
    }
}

export const getAccomsByDestinations = async (destination:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-selected-data?destination=${destination}&sort=asc`)
        return res.data
    }catch(err){
        console.error(err)
    }
}
export const getAccomsByCountry = async (page:number, limit:number,location:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-selected-data?page=${page}&limit=${limit}&search=&location=${location}&sort=asc`)
        return res.data
    }catch(err){
        console.error(err)
    }
}

export const getAccomBySlug = async (slug:string) => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/accommodation/get-by/${slug}`)
        return res.data
    }catch(err){
        console.error(err)
    }
}


