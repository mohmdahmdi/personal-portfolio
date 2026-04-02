import BlogCard from "@/components/blogs/blogCard";
import { blogs } from "@/db/blogs";
import React from "react";

const Blogs = () => {
  return (
    <section className="ml-3 h-full overflow-scroll">
      <h1 className="font-bold text-2xl my-5">Blogs</h1>
      <div className="flex flex-col gap-4 pr-3">
        {blogs.map((blog, idx) => (
          <BlogCard
            key={`blogcard-idx-${blog.id}`}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            date={blog.date}
            imageName={blog.imageName}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
