export default function MainContent(props) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={props.img.src}
          alt="Travel destination"
        />
      </div>
      <div className="info-container">
        <img
          className="marker"
          style={{ width: "7px", height: "9px" }}
          src="/location.png"
          alt="map marker icon"
        />
        <span className="country">{props.country}</span>
        <a href={props.location}>View on Google Maps</a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.dates}</p>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>
  );
}
