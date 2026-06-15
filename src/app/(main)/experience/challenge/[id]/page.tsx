import { blogs } from "@/db/blogs";
import { renderText } from "@/utils/helpers/renderText";
import Image from "next/image";

const Page = ({ params }: { params: { id: string } }) => {
  const blog = blogs.find((b) => b.id === Number(params.id));
  if (!blog) return <h1>Blog not found | 404</h1>;

  return (
    <div className="grid grid-cols-6 h-full">
      <div className="col-span-5 overflow-scroll pr-5">
        <h1 className="font-semibold text-2xl my-4">{blog.title}</h1>
        <p className="text-justify ml-3 bg-neutral-950 p-3 rounded-2xl mb-5">{renderText(blog.description)}</p>
      </div>

      <div className="col-span-1 relative h-full overflow-clip">
        <Image
          src={`/${blog.imageName}`}
          alt={blog.title}
          fill
          className="object-cover blur-md"
        />
      </div>
    </div>
  );
};

export default Page;
