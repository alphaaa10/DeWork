import { client } from "@/sanity/lib/client"
import Ping from "./ping"
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/query"
import { writeClient } from "@/sanity/lib/write-client" 
import { after } from "next/server"

const View = async({id}) => {
    const {views : totalViews} = await client
        .withConfig( {useCdn: false} )
        .fetch(STARTUP_VIEWS_QUERY , {id})
    
    after( async () =>
            await writeClient
            .patch(id)
            .set({views: totalViews + 1})
            .commit()
    )
    return(

        <div className="view-container !right-14 ">
            <div className="absolute -right-2 -top-2">
                <Ping></Ping>
            </div>

            <p className="view-text">
                <span className="font-black">Views : {totalViews}</span>
            </p>
        </div>
    )
}

export default View