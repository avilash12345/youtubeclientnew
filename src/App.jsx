import React from "react";
import Video from "./pages/Video";
import Audio from "./pages/Audio";
import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
//import Spinner from "./pages/Spinner";

const App = () => {
  return (
    <>
      <h1 className="text-center font-bold underline text-gray-800 mt-20 text-4xl">
        YouTube Video/Audio Downloaders
      </h1>
      <div className="container mx-auto shadow-lg rounded bg-gray-400 min-h-80 w-6/12 mt-10">
        <div className="mt-2 flex justify-around items-center">
        <Link className="mt-2 py-2 bg-red-400 rounded shadow-sm h-12 w-36 text-center text-2xl font-semibold my-auto cursor-pointer hover:bg-red-500 hover:text-teal-500" to="/video">Video</Link>
        <Link className="mt-2 py-2 bg-green-400 rounded shadow-sm h-12 w-36 text-center text-2xl font-semibold my-auto cursor-pointer hover:bg-green-500 hover:text-yellow-500" to="/audio">Audio</Link>
        </div>
        <Routes>
          <Route element={<Home/>} path="/" exect />
          <Route element={<Video />} path="/video" />
          <Route element={<Audio />} path="/audio" />
        </Routes>
      </div>
    </>
  );
};

export default App;
