import React from "react";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import { LampDemo } from "@/components/HerSection";

async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search : query || null}

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY,params });

  return (
    <>
      {/* <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,
          <br />
          Connect With EntrePreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          {" "}
          Submit Ideas, Vote on Pitches , And get Noticed in Virtual
          Competitions{" "}
        </p>

        <SearchForm query={query} />
      </section> */}
      <LampDemo query={query}/>

      {/* // check the add button from shadcn */}

      <section className="section-container !bg-black ">
        <p className="text-30-bold !text-white">
          {query ? `Search results for ${query}` : "All startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}

export default Home;
