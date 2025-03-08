import SingleTrek from "@/components/LuxuryTreks/SingleTrek/SingleTrek"

const page=({params}:{params:{id:string}})=>{
    return(
        <SingleTrek id={params.id}/>
    )
}

export default page