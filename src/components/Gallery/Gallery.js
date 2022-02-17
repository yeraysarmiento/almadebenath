import { useParams } from "react-router-dom";
import "./Gallery.scss";

function Gallery({ theme }) {
  let { collection } = useParams();
  const collectionData = theme[collection];

  return (
    <main className="gallery-container">
      <h2 className="gallery-title">{collectionData.title}</h2>
      <ul className="gallery">
        {collectionData.pictures.map((picture, index) => (
          <li className="picture" key={index}>
            <img alt="" src={picture} height="155" />
            <div className="picture__line"></div>
          </li>
        ))}
      </ul>
      <h2 className="gallery-title gallery-title--footer">
        {collectionData.title}
      </h2>
    </main>
  );
}

export default Gallery;
