import SingleAccommodation from "@/components/Accommodations/SingleAccommodation"

const page=({params}:{params:{id:string}})=>{
    return (
        <SingleAccommodation id={params.id}/>
    )
}
export default page