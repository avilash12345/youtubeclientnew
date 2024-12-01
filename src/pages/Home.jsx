import React from 'react'
import youtube96 from '../assets/youtube-96.svg'
const Home = () => {
  return (
   <>
   <div className='flex justify-center items-center'>
    <img className='' src={youtube96} alt="ytd" />
    <h1 className='text-center text-4xl text-red-600 font-extrabold'>YouTube Downloader</h1>
   </div>
   <div className='container text-md text-wrap text-blue-700 font-serif font-bold mx-1'>
   A YouTube downloader is a software or web-based tool that allows users to download videos or audio from YouTube to their local devices. It works by fetching the media content from YouTube's servers and saving it in a variety of file formats, such as MP4, MP3, AVI, or others, depending on user preferences. These tools are commonly used for offline viewing or listening when an internet connection is not available.
   </div>
   </>
  )
}

export default Home