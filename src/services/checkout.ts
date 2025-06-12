import axios from "axios"

export const createBookingCheckout=async(data:any)=>{//eslint-disable-line @typescript-eslint/no-explicit-any
    try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/booking/create`,data)
        return res.data
    }catch(err){
        console.error(err)
    }
}