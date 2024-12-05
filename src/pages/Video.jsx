import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const Video = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [filePath, setFilePath] = useState("");
  const [isloading,setIsloading] =useState(false)

  //download video
  const handlesubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    try {
      // Send POST request to FastAPI backend
      const response = await axios.post("https://youtube-downloaderapi-main-kpcnw3mao-avilash12345s-projects.vercel.app/video/", {
        url: url,
      });
      //console.log(response.data);
      // Handle successful response
      setMessage(response.data.message);
      setFilePath(response.data.file_path);
    } catch (error) {
      // Handle error
      if (error.response) {
        // Server returned an error response
        setMessage(`Error: ${error.response.data.detail}`);
      } else if (error.request) {
        // No response from the server
        setMessage("Error: No response from server");
      } else {
        // Other errors
        setMessage(`Error: ${error.message}`);
      }
    }finally{
      setIsloading(false)
      setUrl("")
    }
  };


//useEffect(()=>{
  //setTimeout(()=>{
    //setIsloading(false)
 // },5000)
//},[message])

  return (
    <>
      <div className="mt-6 sm:mt-4  lg:items-center ">
        <h5 className="text-center text-2xl text-orange-700 font-semibold underline shadow-sm my-4">
          Download Videos
        </h5>
        <input
          type="text"
          id="full_name"
          className="block w-6/12 mx-auto  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
          placeholder="Enter YouTube Link Here....."
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="mx-[17rem] w-36 my-4  items-center justify-center rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-green-800"
          onClick={handlesubmit}
        >
          Download Now
        </button>
        { isloading ? (
          <>
            <Spinner/>
          </>
        ) : (
          <>
           <div className='text-center'>
              <h4 className='text-center font-bold text-teal-700 shadow-lg text-xl'>{message}</h4>
              <h4 className='text-center font-semibold shadow-lg text-orange-700 text-xs'>{filePath}</h4>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Video;
