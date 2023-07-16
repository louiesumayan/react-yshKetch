import React from 'react';
import Navbar from './components/navbar';
import Card from './components/Card';
import CardData from './components/CardData';
import Footer from './components/Footer';

function App() {
  const cardItem = CardData.map((item) => {
    return <Card key={item.id} data={item} />;
  });
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <section className="container hero__banner">
        <img src="./images/hero_img.jpg" />
      </section>
      <section className="container card--item">{cardItem}</section>
      <Footer />
    </div>
  );
}

export default App;
