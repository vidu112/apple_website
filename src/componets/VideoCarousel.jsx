import { useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
const VideoCarousel = () => {

    const VideoRef = useRef([]);
    const VideoSpanRef = useRef([]);
    const VideoDivRef = useRef([]);


    const [video,setVideo] = useState({
        isEnd:false,
        startPlay:false,
        videoId:0,
        isLastVideo:false,
        isPlaying:false,
    })

    const {isEnd,startPlay,videoId,isLastVideo,isPlaying}= video
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20 ">
            <div className="video-carousel_container">
              <div
                className="w-full h-full flex-center rounded-3xl
                    overflow-hidden bg-black"
              >
                <video
                  id="video"
                  muted
                  playsInline preload="auto">
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

            <div className="absolute top-12 left-[5%] z-10">
            {list.textLists.map((text)=>(
                <p key={text} className="md:text-2xl text-xl font font-medium">{text}</p>
            ))}
            </div>

            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
