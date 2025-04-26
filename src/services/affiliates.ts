
import axios from "axios"

export const getAffiliates = async () => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/recommend/get/`)
        return res
    }catch(err){
        console.log(err)
    }
}