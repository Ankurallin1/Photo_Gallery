import React from "react";

const Grid = ({ photos }) => {
  const handleClick = async (event) => {
    const imageUrl = event.target.src;
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
    link.click();
  };
  return (
    <>
      <h1>My Gallery</h1>
      <div className="grid">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="grid__item">
            <img
              src={`https://photo-j7r5.onrender.com/uploads/${photo}`}
              alt="grid_image"
              onClick={handleClick}/ >
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
