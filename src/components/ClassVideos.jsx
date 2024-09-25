import React from "react";
import "./ClassVideos.css";

const videos = [
  {
    title: "Class Video 1",
    description: "This is the first class video.",
    url: "https://drive.google.com/file/d/1K5egJlLfqBQnDCebkYJ08B3oBs8oESPG/preview",
  },
  {
    title: "Class Video 2",
    description: "This is the second class video.",
    url: "https://drive.google.com/file/d/1zmI_hn0RbHalh1hgCxgYyvDC6NrKzUZx/preview",
  },
  {
    title: "Class Video 3",
    description: "This is the Third class video.",
    url: "https://drive.google.com/file/d/1zmI_hn0RbHalh1hgCxgYyvDC6NrKzUZx/preview",
  },
{
    title: "Class Video 6",
    description: "This is the 6th class video.",
    url: "https://drive.google.com/file/d/14syfkAUcC--4C05gCv3BVOI6J_naDc_k/preview",
  },
  
  {
    title: "Class Video 7",
    description: "This is the 7th class video.",
    url: "https://drive.google.com/file/d/1YJ8EAteHc5A2C50S6KAo4aCHUz0YLkPp/preview",
  },
  {
    title: "Class Video 8",
    description: "This is the 8th class video.",
    url: "https://drive.google.com/file/d/1_ZJdjFGOYsnYva3AJhmHvKyIaYgNdmkc/preview",
  },
  {
    title: "Class Video 9",
    description: "This is the 9th class video.",
    url: "https://drive.google.com/file/d/1gl4FToDdtpziFcPK1AHh3HLg1lKSzOBx/preview",
  },
  // Add more videos here
];

const ClassVideos = () => {
  return (
    <div className="video-gallery">
      {videos.map((video, index) => (
        <div key={index} className="video-card">
          <iframe
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-info">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClassVideos;
