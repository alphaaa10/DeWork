import SearchForm from "../../components/SearchForm"
import StartupCard from "../../components/StartupCard"


export default async function Home( {searchParams} ) {
  const query = (await searchParams).query

  const posts = [ {
     _createdAt: new Date(),
     author: {_id: 1,name:'Shafiq'},
     _id: 1,
     views: 10,
     image: 'https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg',
     description: 'Helphelp hellothere',
     category: 'pro',
     title: 'web-dev',

  },{
    _createdAt: new Date(),
     author: {_id: 1,name:'Shafiq'},
     _id: 2,
     views: 10,
     image: 'https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg',
     description: 'Helphelp hellothere',
     category: 'pro',
     title: 'BlockChain',
  },{
    _createdAt: new Date(),
     author: {_id: 1,name:'Shafiq'},
     _id: 3,
     views: 10,
     image: 'https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg',
     description: 'Helphelp hellothere',
     category: 'pro',
     title: 'web-dev',
  },{
    _createdAt: new Date(),
     author: {_id: 1,name:'Shafiq'},
     _id: 4,
     views: 10,
     image: 'https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg',
     description: 'Helphelp hellothere',
     category: 'pro',
     title: 'web-dev',
  },{
    _createdAt: new Date(),
     author: {_id: 1,name:'Shafiq'},
     _id: 5,
     views: 10,
     image: 'https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg',
     description: 'Helphelp hellothere',
     category: 'pro',
     title: 'web-dev',
  },{
    _createdAt: new Date(),
     author: {_id: 1,name:'Shafiq'},
     _id: 6,
     views: 10,
     image: 'https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg',
     description: 'Helphelp hellothere',
     category: 'pro',
     title: 'web-dev',
  },

  
]
  
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
    </>
  
  ) 
}