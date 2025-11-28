import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { project } from "../data/projectData";
import { Link } from "react-router-dom";
import cover from "../assets/img/cover.png";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const items = [{ img: cover, isCover: true }, ...project];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  const leftIndex = (index - 1 + items.length) % items.length;
  const rightIndex = (index + 1) % items.length;

  const left = items[leftIndex];
  const center = items[index];
  const right = items[rightIndex];

  const CardWrapper = ({ children, item }) => {
    if (item.isCover) return children; 
    return (
      <Link to={`/projects/${item.slug}`}>
        {children}
      </Link>
    );
  };

  return (
    <section>
      <div className="relative h-[600px] flex items-center justify-center overflow-hidden">

        {/* LEFT CARD */}
        <div className="absolute -translate-x-[101%] transition-all duration-400">
          <CardWrapper item={left}>
            <img
              src={left.isCover ? cover : left.img[0]}
              className="w-[820px] h-[460px] rounded-2xl object-cover"
            />
          </CardWrapper>
        </div>

        {/* CENTER CARD */}
        <div className="absolute transition-all duration-400">
          <CardWrapper item={center}>
            <div className="relative w-[820px] h-[460px] rounded-2xl overflow-hidden">
              <img
                src={center.isCover ? cover : center.img[0]}
                className="w-full h-full object-cover"
              />
              {center.isCover && (
                <div>
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-h2-md lg:text-h2 text-white">Our Work</h2>
                  <Link to={"/projects"}className="text-body text-white">Click to see more</Link> 
                  </div>
                </div>
              )}
            </div>
          </CardWrapper>
        </div>

        {/* RIGHT CARD */}
        <div className="absolute translate-x-[101%] transition-all duration-400">
          <CardWrapper item={right}>
            <img
              src={right.isCover ? cover : right.img[0]}
              className="w-[820px] h-[460px] rounded-2xl object-cover"
            />
          </CardWrapper>
        </div>

        {/* BUTTONS */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 
                     left-[calc(50%-410px+20px)]
                     bg-black/30 p-3 rounded-full text-white "
        >
          <FaChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 
                     left-[calc(50%+410px-55px)]
                     bg-black/30 p-3 rounded-full text-white "
        >
          <FaChevronRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
