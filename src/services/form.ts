import axios from "axios"

export const postContact = async (data: any) => { //eslint disable line @typescript-eslint/no-explicit-any
    try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/add-contact`,data)
        return res.data

    }catch(err){
        console.error(err)
    }
}

export const getContactData=async()=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/profile/get/67e6ceb9a96701a607af52ef`)
        return res.data
    }catch(err){
        console.error(err)
    }
}

export const postQuote = async (data: any) => { //eslint disable line @typescript-eslint/no-explicit-any
    try{
        const res=await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/quote/customize`,data)
        return res.data

    }catch(err){
        console.error(err)
    }
}

export const postTailor = async (data: any) => { //eslint-disable-line @typescript-eslint/no-explicit-any
    try {
        // Format arrays correctly for API consumption
        const formattedData = {
            ...data,
            // The API expects these to be JSON strings, not raw arrays
            dreamDestination: Array.isArray(data.dreamDestination) ? JSON.stringify(data.dreamDestination) : data.dreamDestination,
            transportationPreferences: Array.isArray(data.transportationPreferences) ? JSON.stringify(data.transportationPreferences) : data.transportationPreferences
        };

        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/tailor-made/add`, formattedData);
        return res.data;
    } catch (err) {
        console.error(err);
        throw err; // Re-throw to allow error handling in components
    }
}