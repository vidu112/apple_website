import ScrollTrigger from "gsap/all"
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger);

export const animeWithGsap = (target, animationProps,scrolProps)=>{
    gsap.to(target,{
        ...animationProps,
        ScrollTrigger:{
            trigger:target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 85%' ,
            ...scrolProps
        }
    })
}


export const animateWithGsapTimeline = (timeline,rotationRef,rotationState,firstTarget,secondTarget,animationProp) => {
    timeline.to(rotationRef.current.rotation,{
    y:rotationState,
    duration:1,
    ease:'power2.inOut'
})

timeline.to(
    firstTarget,{
        ...animationProp,
        ease:'power2.inOut'
    },
    '<'
)
timeline.to(
    secondTarget,{
        ...animationProp,
        ease:'power2.inOut'
    },
    '<'
)

} 