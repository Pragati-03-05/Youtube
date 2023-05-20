import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [seachParams] = useSearchParams();

  return (
    <div className=" mt-14 flex justify-evenly w-full mb-5">
      <div>
        <iframe
          width="850"
          height="480"
          src={
            "https://www.youtube.com/embed/" +
            seachParams.get("v") +
            "?autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="mt-6"
        ></iframe>
      </div>

      <div className="flex flex-col gap-6">
        {'hello world'}
      </div>
    </div>
  );
};

export default WatchPage;