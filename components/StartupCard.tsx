import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon } from 'lucide-react';
import {cn, formatDate} from '@/lib/utils'
import { Author, Startup } from '@/sanity.types';
import { Skeleton } from './ui/skeleton';
import { BackgroundGradientDemo } from './Gradient-bor';

export type StartupTypeCard = Omit<Startup,"author"> & {author ? : Author}

const StartupCard = ({post} : {post : StartupTypeCard}) => {
    const {
        _createdAt,
        views,
        author,
        title,
        category,
        _id,
        image,
        description,
      } = post;
  return (
    <>
    <BackgroundGradientDemo>
     <li className="group ">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium !text-gray-50">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1 !text-white">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold !text-white line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src={author?.image || '/path/to/default/image.png'}
            alt={'yug'}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc !text-gray-400">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5 bg-">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-18 !text-gray-50 font-bold">{category}</p>
        </Link>
        {/* <Button className="startup-card_btn " asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button> */}
        <Link href={`/startup/${_id}`}>
        <button className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
  <div className="px-8 py-2  bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent">
  Details
  </div>
</button>
</Link>
      </div>

    
    </li>  </BackgroundGradientDemo>
    </>
  )
}

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);


export default StartupCard