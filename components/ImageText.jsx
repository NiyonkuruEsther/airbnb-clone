import React from "react";

const ImageText = () => {
  return (
    <div className="flex gap-12 max-h-min overflow-hidden py-12 pl-12 md:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-1 lg:mx-auto items-center justify-center md:px-12 mx-auto">
      <div className="">
        <img
          className="min-w-[100px] w-[350px] min-h-[100px] h-[300px] object-center "
          src="https://i.postimg.cc/0N3MTsRM/image-12.png
"
          alt=""
        />{" "}
        <p></p>
      </div>

      <div>
        <img
          className="min-w-[100px] w-[350px] min-h-[100px] h-[300px] object-center"
          src="https://i.postimg.cc/Dzm4pzD3/wedding-photography-1.png
"
          alt=""
        />{" "}
        <p></p>
      </div>
      <div>
        <img
          className="min-w-[100px] w-[350px] min-h-[100px] h-[300px] object-center"
          src="https://i.postimg.cc/wjwskNwk/mountain-bike-1-1.png
"
          alt=""
        />{" "}
        <p></p>
      </div>
    </div>
  );
};

export default ImageText;
