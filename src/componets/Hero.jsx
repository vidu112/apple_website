import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoScr] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () =>{
    if(window.innerWidth< 760){
        setVideoScr(smallHeroVideo)
    }else{
        setVideoScr(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize',handleVideoSrcSet)
    return ()=>{
        window.removeEventListener('resize',handleVideoSrcSet)
    }
  },[])

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    }),
    gsap.to("#cta", {
        delay:2,
        opacity:1,
        y:-50,
      })
  }, []);

  return (
<section className="w-full nav-height bg-black flex flex-col items-center justify-center">
  <div className="text-center mb-8">
    <p id="hero" className="hero-title">
      iPhone 15 Pro
    </p>
  </div>

  <div className="w-11/12 md:w-10/12">
    <video
      className="pointer-events-none w-full"
      autoPlay
      muted
      playsInline
      key={videoSrc}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  </div>
  <div id="cta" className="flex-col flex items-center opacity-0 translate-y-20">
    <a href="#hightlights" className="btn">Buy</a>
    <p>From $199/Month or $999</p>
  </div>
</section>

  );
};

export default Hero;
