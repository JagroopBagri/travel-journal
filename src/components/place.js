import React from 'react';
import data from '../data';
import pin from '../images/pin.png';
function Card(props) {
  return (
    <section className="card">
      <div className="image">
        <img src={props.item.image} alt={'picture-of' + props.item.title} />
      </div>
      <div className="information">
        <div className="location">
          <div className="country">
            <img className="pin" src={pin} alt="pin-logo" />
            <div>{props.item.location}</div>
          </div>
          <a
            className="google"
            href={props.item.link}
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        <div className="name">{props.item.title}</div>
        <div className="dates">{props.item.start + '-' + props.item.end}</div>
        <div className="summary">{props.item.description}</div>
      </div>
    </section>
  );
}

function Place() {
  let locations = data.map((location) => {
    return <Card key={location.id} item={location} />;
  });
  return <>{locations}</>;
}

export default Place;
