import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { unstable_after as after } from "next/server";
import { WriteClient } from '@/sanity/lib/write-client';

const View = async ({ id }: { id: string }) => {

  let { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });
    
    if( totalViews === null) totalViews = 1;
  
  after(
    async () =>

      (await WriteClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit())
      
  );

  const correctView = totalViews > 1 ? "views": "view"

  return (
    <div className="view-container">
    <div className="absolute -top-2 -right-2">
      <Ping />
    </div>

    <p className="view-text">
      <span className="font-black"> {correctView} : {totalViews}</span>
    </p>
  </div>
  )
}

export default View