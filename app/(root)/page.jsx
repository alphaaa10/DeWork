import { STARTUPS_QUERY } from "@/sanity/lib/query"
import SearchForm from "../../components/SearchForm"
import StartupCard from "../../components/StartupCard"
import { sanityFetch,SanityLive } from "@/sanity/lib/live"


export default async function Home( {searchParams} ) {
  const query = (await searchParams).query
  const params = { search : query || null }
  const {data: posts} = await sanityFetch({query : STARTUPS_QUERY, params})
  return(
    <>
        <section className="pink_container">
        
          <h1 className="heading">
            Bring your projects to Life
          </h1>
          <p className="sub-heading !max-w-3xl">DECENTRALIZED TALENT ECOSYSTEM</p>
          <SearchForm query = {query}/>

        </section>

        <section className="section_container">
          <p className="text-30-semibold">
            {query ? `Searching results for ${query}` : "All Freelancers"}
          </p>

          <ul className="mt-7 card_grid">
            {posts?.length > 0 ? (
              posts.map((post) => (
                <StartupCard key={post?._id} post={post}/>
            ))
          ):(
              <p>No FreeLancers Found</p>
            )
            }

          </ul>

        </section>
        <SanityLive/>
    </>
  
  ) 
}