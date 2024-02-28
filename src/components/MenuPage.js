import React from 'react';
import './styles/MenuPage.css';
import mimosa from "../assets/Menu/Mimosa.png";
import back from "../assets/back.png";
import {Link} from "react-router-dom";
import transition from "../transition";

function MenuPage() {
  return (
    <div className="menu-page">
      <button onClick={() => window.history.back()} className="back-button">
        <img src={back} alt="Back" className="back-icon" /> Back
      </button>

      <div className="menu-section">
        <div className="left-column">
          <h1>Drinks</h1>
          <hr class="hr-menu"></hr>
          <h3>Espresso</h3>
          <p>A strong, concentrated coffee brewed by forcing hot water through finely ground coffee.</p>
          <h3>Classic Martini</h3>
          <p>A cocktail made with gin and vermouth, garnished with an olive or a lemon twist.</p>
          <h3>Mojito</h3>
          <p>A traditional Cuban cocktail consisting of five ingredients: white rum, sugar, lime juice, soda water, and mint.</p>
          <h3>Gin and Tonic</h3>
          <p>A highball cocktail made with gin and tonic water, usually garnished with a slice of lime or lemon.</p>

          <h1>Grandeur Classics</h1>
          <hr class="hr-menu"></hr>
          <h3>Filet Mignon</h3>
          <p>A steak cut of beef taken from the smaller end of the tenderloin, known for its tenderness.</p>
          <h3>Lobster Bisque</h3>
          <p>A smooth, creamy, and highly seasoned soup of French origin, made with lobster.</p>
          <h3>Beef Bourguignon </h3>
          <p>A French stew prepared with beef braised in red wine, often red Burgundy, and beef broth, typically flavored with carrots, onions, garlic, and a bouquet garni, and garnished with pearl onions, mushrooms, and bacon.</p>
          <h3>Duck à l'Orange</h3>
          <p>A classic French dish in which duck is roasted and served with an orange sauce.</p>
          <h3>Salmon en Papillote</h3>
          <p>A method of cooking in which the fish is put into a folded pouch or parcel and then baked.</p>

          <h1>Desserts</h1>
          <hr class="hr-menu"></hr>
          <h3>Crème Brûlée</h3>
          <p>A dessert consisting of a rich custard base topped with a contrasting layer of hard caramel.</p>
          <h3>Chocolate Fondant</h3>
          <p>A popular dessert that features a chocolate cake with a liquid chocolate center.</p>
          <h3>Tarte Tatin</h3>
          <p>An upside-down pastry in which the fruit (usually apples) are caramelized in butter and sugar before the tart is baked.</p>
          <h3>Macarons</h3>
          <p>A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food coloring.</p>
          <h3>Éclair</h3>
          <p>A pastry made with choux dough filled with a cream and topped with chocolate icing.</p>
        </div>

        <div className="right-column">
          <img src={mimosa} alt="Mimosa" className="menu-image"/>
        </div>
      </div>
    </div>
  );
}

export default transition(MenuPage);
