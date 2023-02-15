import React from "react";

const Gallery = () => {
  return (
    <div className="max-w-2xl pb-12 gap-4 mx-auto grid grid-cols-5 xs:h-[10vh] sm:h-[30vh] md:px-12 h-[45vh]">
      <div className="place-self-center md:place-self-center">
        <img
          className="w-56  "
          src="https://i.postimg.cc/ZnLk7kCX/image-22.png
  "
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 place-self-start sm:place-self-center">
        <img
          className="w-56  "
          src="https://i.postimg.cc/Pr2s1jGw/image-30.png"
          alt=""
        />

        <img
          className="w-56  "
          src="https://i.postimg.cc/t44bcgdk/image-24.png
"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 place-self-end">
        <img
          className="w-56  "
          src="https://i.postimg.cc/XvT0XcR1/image-25.png
"
          alt=""
        />
        <img
          className="w-56  "
          src="https://i.postimg.cc/7ZhvVWDQ/image-26.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4">
        {" "}
        <img
          className="w-56  "
          src="
      https://i.postimg.cc/3rjHJGn9/image-27.png
"
          alt=""
        />
        <img
          className="w-56  "
          src="      https://i.postimg.cc/W1HBfw1p/image-28.png"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-4 place-self-end">
        <img
          className="w-56  "
          src="https://i.postimg.cc/x8QD3jTK/image-29.png

"
          alt=""
        />
        <img
          className="w-56  "
          src="https://i.postimg.cc/mDCW91RL/image-23.png
"
          alt=""
        />
      </div>
    </div>
  );
};

export default Gallery;
