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