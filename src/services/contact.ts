import axios from "axios"

export const postContact = async (data: any) => { //eslint disable line @typescript-eslint/no-explicit-any
    try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/add-contact`,data)
        return res.data

    }catch(err){
        console.log(err)
    }
}

export const postQuote = async (data: any) => { //eslint disable line @typescript-eslint/no-explicit-any
    try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/quote/customize`,data)
        return res.data

    }catch(err){
        console.log(err)
    }
}