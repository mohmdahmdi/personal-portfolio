"use client";

import { Blog } from "@/interfaces/blog";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Linked from "@mui/icons-material/Link";
import { eastSea } from "@/assets/fonts/eastSea";
const BlogCard = (blog: Blog & { idx: number }) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className={`flex max-md:items-center max-md:flex-col ${blog.idx % 2 === 0 ? "" : "md:flex-row-reverse"} bg-neutral-950 hover:bg-neutral-900 transition-all cursor-pointer rounded-2xl overflow-hidden`}
    >
      <div className="w-[30vh] h-[30vh] md:h-52 md:w-52 relative shrink-0 max-md:rounded-2xl overflow-hidden max-md:my-5">
        <Image src={`/${blog.imageName}`} alt={blog.title} fill />
      </div>
      <div className="px-4 py-2 flex flex-col justify-between">
        <h2 className=" text-xl font-semibold">{blog.title}</h2>
        <p
          className={`${eastSea.className} text-2xl line-clamp-3 text-neutral-400`}
        >
          {blog.description}
        </p>
        <div className="flex justify-between">
          <p className={`${eastSea.className} text-xl`}>{blog.author}</p>
          <p className="text-neutral-600">{blog.date.toDateString()}</p>
        </div>
        <div className="flex justify-between items-center border-t border-neutral-800 pt-1">
          <p>Read more</p>
          <Linked />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
