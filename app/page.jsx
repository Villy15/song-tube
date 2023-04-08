'use client'
import Form from "./components/Form"
import Video from "./components/Video"

import { useState } from "react"
import { useSavedInputURL, usePlayVideo, useSkipVideo, usePlaybackSpeed, useLoopVideo, useCurrentTime } from "./hooks"

const HomePage = () => {
  const [player, setPlayer] = useState(null);
  
  const { inputURL, videoId, handleChange } = useSavedInputURL(); // Youtube URL
  const { isPlaying, handlePlay } = usePlayVideo(player);   // Playing the video
  const { skipForward, skipBackward } = useSkipVideo(player); // Skipping the video
  const { handlePlaybackSpeed } = usePlaybackSpeed(player); // Playback speed of the video
  const { isLooping, handleLoop } = useLoopVideo(player); // Looping the video
  const { getCurrentTime } = useCurrentTime(player); // Current time of the video

  // Props for the Video component 
  const videoProps = {
    videoId, setPlayer
  }

  // Props for the Form component
  const formProps = {
    inputURL, handleChange, 
    isPlaying, handlePlay, 
    skipForward, skipBackward, 
    handlePlaybackSpeed,
    isLooping, handleLoop,
    getCurrentTime
  }

  return (
    <>
      <Video {...videoProps}/>
      <Form {...formProps}/>
    </>
  )
}

export default HomePage