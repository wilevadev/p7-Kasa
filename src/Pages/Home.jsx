import React, { useEffect, useState } from 'react';
import Header from "../components/Header/Header"
import Banniere from "../components/Banniere/Banniere"
import Logement from "../components/Logements/Logement"
import Footer from "../components/Footer/Footer"

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => res.json())
      .then((data) => setLogements(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <Banniere />
      <Logement logements={logements} />
      <Footer />
    </div>
  );
};

export default Home;