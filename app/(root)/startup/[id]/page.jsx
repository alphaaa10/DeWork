import {React , Suspense} from 'react'
import { STARTUP_QUERY_BY_ID } from '@/sanity/lib/query'
import {notFound} from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { formatDate } from '@/lib/utils'
import { Skeleton } from '@/components/ui/skeleton'
import MarkdownIt from 'markdown-it'
import View from '@/components/view'
import { Button } from '@/components/ui/button'

export const experimental_ppr = true

const Page = async ({ params }) => {
    const id = (await params).id
    const md = MarkdownIt();

    if( !id ) return notFound();

    const post = await client.fetch(STARTUP_QUERY_BY_ID , {id})

    if(!post) return notFound();
    
    const parsedContent = md.render(post?.pitch || '')

    return(
        <>
            <section className='pink_container !min-h-[230px]'>
                <p className='tag'>{formatDate(post?._createdAt)}</p>

                <h1 className='heading'>{post.title}</h1>

                <p className='sub-heading !max-w-5xl'>{post.description}</p>
            </section>
            <section className='section_container'>
                <img 
                    src={post.image} 
                    alt="thumbnail" 
                    className="w-full h-auto rounded-xl"
                />
                <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                    <div className='flex-between gap-5'>
                        <div>
                            <p className='text-20-medium'>{post.author.name}</p>
                            <p className='text-20-medium !text-black-300'>@{post.author.username}</p>

                        </div>
                        <p className='category-tag'>{post.category}</p>
                    </div>
                    <h3 className='text-30-bold'>Project Details</h3>
                    {parsedContent ?(
                        <article 
                        className='prose max-w-4xl font-work-sans break-all'
                        dangerouslySetInnerHTML={{__html: parsedContent}}/>
                    ):(
                        <p className='no-result'>No details</p>
                    )}

                    <hr className='divider'/>
                
                    <div>
                        <h1 className="text-30-semibold">Contact Details</h1>
                        <div className="flex mt-3">
                            <p className="text-20-medium mr-2" >Email Id: </p>
                            <p className="text-20-medium !text-black-300 hover:!text-blue-500 hover:underline">{post.emailId}</p>
                        </div>
                        <div className="flex">
                            <p className="text-20-medium mr-2" >Phone Number: </p>
                            <p className="text-20-medium">{post.PhoneNum}</p>
                         </div>
                    </div>

                    <div className="flex justify-around">
                        <Button className=" bg-primary border-[3px] border-black rounded-xl p-3 px-5 min-h-[60px] !w-[150px] font-semibold text-[18px]">
                                HIRE NOW!
                        </Button>
                    </div>
                    
                </div>
                

                <Suspense fallback={<Skeleton/>}>
                    <View id={id}/>
                </Suspense>

            </section>
            
        </>
        
    )
}

export default Page