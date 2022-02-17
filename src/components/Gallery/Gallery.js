import "./Gallery.scss";

function Gallery({ collection }) {
  console.log(collection);
  return (
    <main className="gallery-container">
      <h2 className="gallery-title">{collection.title}</h2>
      <ul className="gallery">
        {collection.pictures.map((picture, index) => (
          <li className="picture" key={index}>
            <img alt="" src={picture} height="155" />
            <div className="picture__line"></div>
          </li>
        ))}
      </ul>
      <h2 className="gallery-title gallery-title--footer">
        {collection.title}
      </h2>
    </main>
  );
}

export default Gallery;
