import React from 'react';
import data from '../data';
import pin from '../images/pin.png';
function Card() {
  return (
    <section className="card">
      <div className="image">
        <img
          src="https://lp-cms-production.imgix.net/2021-05/shutterstockRF_1563449509.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=75&dpr=1"
          alt="view-of-santorini"
        />
      </div>
      <div className="information">
        <div className="location">
          <div className="country">
            <img className="pin" src={pin} alt="pin-logo" />
            <div>Greece</div>
          </div>
          <div className="google">view on google</div>
        </div>
        <div className="name">Santorini</div>
        <div className="dates">Aug 2021 - Sep 2021</div>
        <div className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          ipsam eius accusantium aliquam, eveniet eligendi architecto sapiente
          dicta ex in, quasi vel quod sequi nihil hic dolorum. Dolore, rerum
          laborum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequatur, aperiam numquam illum dolorum similique error libero
          voluptates culpa tempore explicabo atque consectetur esse. Tempore
          quam natus nemo maxime, excepturi consequuntur?
        </div>
      </div>
    </section>
  );
}

function Place() {
  let locations = data.map((location) => {
    return <div>testing</div>;
  });
  console.log(locations);
  return (
    <>
      <Card />
    </>
  );
}

export default Place;
