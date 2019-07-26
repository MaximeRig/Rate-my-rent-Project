import React from 'react';

// locals imports
import './research.scss';
import ResearchForm from './ResearchForm';

const Research = () => (
  <main className="accueil">
    <div className="homePhoto">
      <div className="presentation">
        <h2 className="presentation-title">Bienvenue sur Rate my Rent</h2>
        <h4 className="presentation-subtitle">Le site de notation des bons et mauvais appartements</h4>
      </div>
      <div className="recherche">
        <div className="recherche-zone">
          <h2 className="recherche-title">Rechercher un appartement</h2>
          {/* <form className="recherche-form">
            <input className="recherche-input" type="text" placeholder="Entrer une ville ou une adresse" />
            <button className="recherche-submit" type="submit">Rechercher</button>
          </form> */}
          <ResearchForm />
        </div>
        <div className="noter">
          <h1 className="noter-title">
            A votre tour, notez votre logement !
          </h1>
          <button className="noter-button" type="button"><a href="#">Noter un logement</a></button>
        </div>
      </div>
    </div>
  </main>
);

export default Research;
