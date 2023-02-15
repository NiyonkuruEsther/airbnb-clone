import { useEffect } from "react";
import WebFont from "webfontloader";
import Description from "../components/Description";
import Gallery from "../components/Gallery";
import ImageText from "../components/ImageText";
import Navbar from "../components/Navbar";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Poppins"],
      },
    });
  }, []);
  return (
    <div className="max-w-4xl mx-auto shadow-2xl h-fit">
      <Navbar />
      <Gallery />
      <Description />
      <ImageText />
    </div>
  );
}
