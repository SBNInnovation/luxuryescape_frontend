import SingleBlog from "@/components/Blogs/SIngleBlog"

const page=({params}:{params:{id:string}})=>{
    return(
        <SingleBlog id={params.id}/>
    )
}

export default page