import "./Gallery.scss";
import normandie from "../../img/normandie.jpeg";

function Gallery({ collection }) {
  return (
    <main className="gallery-container">
      <h2 className="gallery-title">{collection.title}</h2>
      <ul className="gallery">
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={normandie} height="155" />
          <div className="picture__line"></div>
        </li>
        <li className="picture">
          <img alt="" src={collection.pictures[0].picture} height="155" />
          <div className="picture__line"></div>
        </li>
      </ul>
      <h2 className="gallery-title gallery-title--footer">
        {collection.title}
      </h2>
    </main>
  );
}

export default Gallery;
