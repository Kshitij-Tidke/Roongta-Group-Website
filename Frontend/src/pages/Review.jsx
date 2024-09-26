import React from "react";
import { Heading } from "../components";

function Review() {
  return (
    <>
      <div>
        <Heading title={"Good Reviews by Customers"} />
      </div>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-16 pb-7">
        <p className="w-full sm:w-auto">
          <iframe
            className="w-full sm:w-[370px] h-[315px]"
            src="https://www.youtube.com/embed/y8tF3IoaJ_U"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>
        <p className="w-full sm:w-auto">
          <iframe
            className="w-full sm:w-[370px] h-[315px]"
            src="https://www.youtube.com/embed/tsPRe4V2Cl8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>
        <p className="w-full sm:w-auto">
          <iframe
            className="w-full sm:w-[370px] h-[315px]"
            src="https://www.youtube.com/embed/L-36U92u4BU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </p>
      </div>
      <div className="flex justify-center pb-16">
        <a
          className="bg-blue-500 px-5 py-3 text-white hover:bg-blue-600 rounded"
          href="https://www.youtube.com/playlist?list=PLlrhJygJiRQpUiEy92OkDr7FcjjS_GuSk"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All
        </a>
      </div>
    </>
  );
}

export default Review;
