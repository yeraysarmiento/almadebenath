import "./Detail.scss";
import closeIcon from "../../assets/icons/close.svg";
import arrowIcon from "../../assets/icons/arrow.svg";

function Detail({ picture }) {
  const onReturn = () => {};

  return (
    <article className="detail-container" onClick={onReturn}>
      <div className="detail">
        <img className="detail__close" src={closeIcon} alt="close icon" />
        <img src={picture.picture} alt={picture.description} />
        <div className="detail__box">
          <img className="detail__left" src={arrowIcon} alt="left arrow icon" />
          <img
            className="detail__right"
            src={arrowIcon}
            alt="right arrow icon"
          />
        </div>
      </div>
    </article>
  );
}

export default Detail;
