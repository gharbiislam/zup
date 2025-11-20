import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { blogs } from "../data/blogData";

const Blog = () => {
  return (
    <section className="pt-[120px] lg:pt-[200px] px-5 md:px-10 space-y-10" id="blog">
      <div className="lg:flex justify-between items-start">
        <h5 className="text-h5 text-black">[08 Blog]</h5>

        <h2 className="text-h2-sm md:text-h2-md lg:text-h2 text-black  lg:w-2/3 lg:text-right">
          Stories, strategies <span className="text-black_60"> , and </span>
          creative perspectives
          <span className="text-black_60"> from the team.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        <Link to={"/blog"} className="text-black_60  flex gap-2 items-center">
          <span className="text-h5 "> All Blogs</span> <FaArrowRight />
        </Link>

        {/**blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {blogs.slice(-3).map((blog, index) => (
            <Link to={`/blog/${blog.slug}`} key={index}>
              <div className="bg-white rounded-2xl space-y-6 px-2 pt-2 pb-6">
                <div className="h-[250px] lg:h-[300px] rounded-xl overflow-hidden">
                  <img
                    src={blog.img}
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h5 className="text-h5 px-6">{blog.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
