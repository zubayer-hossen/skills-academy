import React from "react";
import "./HomeWork.css";

const homeworks = [
  {
    title: "Homework 1",
    description: ` Present Simple and Present Continuous tenses`,
    url: "https://drive.google.com/file/d/1vL45DYIBiiT4EPa9Kvjq7xNH1IlNo_8s/view?usp=sharing",
    coverImage:
      "https://res.cloudinary.com/fzhossen/image/upload/v1725282244/7119039_3400909_rmbygj.jpg",
  },
  {
    title: "Homework 2",
    description: "Present perfect and Present perfect Continuous tenses.",
    url: "https://drive.google.com/file/d/1CGuEFOUVzOqFyYNiU5Mjk967MaUzGzhS/view?usp=sharing",
    coverImage:
      "https://res.cloudinary.com/fzhossen/image/upload/v1725282244/7119039_3400909_rmbygj.jpg", // Add cover image URLs here
  },

  // Add more homework PDFs here
];

const HomeWork = () => {
  return (
    <div className="pdf-gallery">
      {homeworks.map((homework, index) => (
        <div key={index} className="pdf-card">
          <img
            src={homework.coverImage}
            alt={homework.title}
            className="pdf-cover"
          />
          <div className="pdf-info">
            <h3>{homework.title}</h3>
            <p>{homework.description}</p>
          </div>
          <a
            href={homework.url}
            target="_blank"
            rel="noopener noreferrer"
            className="download-link"
          >
            Download PDF
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomeWork;
