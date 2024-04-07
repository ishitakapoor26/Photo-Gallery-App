/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { getImages } from "../api";
import css from "../styles/Gallery.module.css";

const Gallery = ({ galleryData, nextCursor, setImageList, setNextCursor }) => {
  const handleLoadMoreButton = async () => {
    const response = await getImages(nextCursor);
    setImageList((currentImageList) => [
      ...currentImageList,
      ...response.resources,
    ]);
    setNextCursor(response.next_cursor);
  };

  return (
    <>
      <div className={css["galleryData"]}>
        {galleryData.map((image) => (
          <img src={image.url} alt={image.public_id}></img>
        ))}
      </div>
      {nextCursor && (
        <center>
          <button className={css["loadBtn"]} onClick={handleLoadMoreButton}>
            Load More
          </button>
        </center>
      )}
    </>
  );
};

export default Gallery;
