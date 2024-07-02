import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { VideoContext } from "../../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos, error, isLoading } = useContext(VideoContext);

  return (
    <div className="flex main">
      <Sidebar />

      <div className="videos">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoId} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
