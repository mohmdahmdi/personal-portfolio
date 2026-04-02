"use client";

import { Blog } from "@/interfaces/blog";
import React from "react";
import Image from "next/image";
import { eastSea } from "@/app/(main)/page";
import Link from "next/link";

const BlogCard = (blog: Blog & { idx: number }) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className={`flex ${blog.idx % 2 === 0 ? "" : "flex-row-reverse"} bg-neutral-950 hover:bg-neutral-900 transition-all cursor-pointer rounded-2xl overflow-hidden h-52`}
    >
      <div className="h-52 w-52 relative shrink-0 ">
        <Image src={`/${blog.imageName}`} alt={blog.title} fill />
      </div>
      <div className="px-4 py-2 flex flex-col justify-between">
        <h2 className=" text-xl font-semibold">{blog.title}</h2>
        <p className={`${eastSea.className} text-2xl line-clamp-3 text-neutral-400`}>{blog.description}</p>
        <div className="flex justify-between">
          <p className={`${eastSea.className} text-xl`}>{blog.author}</p>
          <p className="text-neutral-600">{blog.date.toDateString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
