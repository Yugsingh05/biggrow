import React from 'react'
import SearchForm from '../../components/SearchForm'
import StartupCard from '@/components/StartupCard';

async function Home({searchParams} : {searchParams: Promise<{query?: string}>}) {

    const query = (await searchParams).query;

    const posts = [ 
        {
            _createdAt : new Date(),
            _id : 1,
            views : 55,
            author : {_id : 1},
            description : "This is dis",
            category : "Robots",
            image : "https://cdn.ebaumsworld.com/mediaFiles/picture/2452130/85386506.jpg",
            title : "Robot 1",
        }
    ]

    return (
        <>
        <section className='pink_container'>
            <h1 className='heading'>
                Pitch Your Startup,<br/>
                Connect With EntrePreneurs
                 </h1>  

                 <p className='sub-heading !max-w-3xl'> Submit Ideas, Vote on Pitches , And get Noticed in Virtual Competitions </p>

                 <SearchForm query = {query}/>
        </section> 

        {/* // check the add button from shadcn */}

        <section className='section-container'>
            <p className='text-30-semibold'>
                {query ? `Search results for ${query}` : "All startups"}
            </p>

            <ul className='mt-7 card_grid'>
                {
                    posts.length > 0 ?(
                        posts.map((post :StartupTypeCard) => (
                            <StartupCard key= {post?._id} post={post}/>
                        ))
                    )  : (
                        <p className='no-results'>No Startups Found</p>
                    ) 
                }


            </ul>

        </section>
        </>
    )
}

export default Home
