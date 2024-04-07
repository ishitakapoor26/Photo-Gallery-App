import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Gallery from "./components/Gallery";
import { Helmet } from "react-helmet";
import { getImages } from "./api";

function App() {
  const [imageList, setImageList] = useState([]);

  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseJson = await getImages();
      setImageList(responseJson.resources);
      setNextCursor(responseJson.next_cursor);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Helmet>
          <title>PicPerfect | Photo Gallery App</title>
        </Helmet>
      </div>
      <Header />
      <Search />
      <Gallery
        galleryData={imageList}
        nextCursor={nextCursor}
        setImageList={setImageList}
        setNextCursor={setNextCursor}
      />
      <Footer />
    </>
  );
}

export default App;
