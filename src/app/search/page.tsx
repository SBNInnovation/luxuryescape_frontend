import Search from "@/components/Search/Search"
import Loader from "@/shared/Loader"
import { Suspense } from "react"

const page=()=>{
    return(
        <Suspense fallback={<Loader/>}>
            <Search/>
        </Suspense>
    )
}

export default page