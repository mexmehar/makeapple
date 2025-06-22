///const Section = ({ title, subtitle, image, textColor = "text-black", bgColor = "bg-white" }) => {
 /// return (
   /// <section className={`${bgColor} ${textColor} text-center py-20 px-4`}>
    ///  <h2 className="text-4xl font-semibold mb-3">{title}</h2>
     /// <p className="text-lg mb-6">{subtitle}</p>
    ///  {image && <img src={image} alt={title} className="mx-auto max-w-md" />}
   /// </section>
 /// );
///};
///export default Section;///
// src/components/Section.jsx
import React from 'react';

const Section = ({ title, subtitle, image }) => {
  return (
    <div className="text-center py-12">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{subtitle}</p>
      <img
        src={image}
        alt={title}
        className="mx-auto mt-4 rounded-lg shadow-md max-w-[500px]"
      />
    </div>
  );
};

export default Section;

