import { useState, useEffect } from "react";
import { fetchData } from "../youtubeAPI";

const Main = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData(`search?part=snippet&q=Indonesia`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, []);

  return (
    <section className="text-white p-3 ml-5 flex flex-col">
      Video yang direkomendasikan
      <div className="grid grid-cols-4 mt-8">
        <Videos video={videos} />
      </div>
    </section>
  );
};

const Videos = ({ video }) => {
  return (
    <>
      {video.map((item, index) => {
        return (
          <div className="w-72 h-72 hover:cursor-pointer" key={index}>
            <img
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <h1 className="mt-2 w-full line-clamp-2 text-sm font-bold">
                {item.snippet.title}
              </h1>
              <p className="text-xs mt-3 text-[#AAA] hover:text-white">{item.snippet.channelTitle}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Main;
