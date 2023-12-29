import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
const Banner = "https://wallpapercave.com/wp/wp6955602.jpg";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Movies Catalog</h1>
          <p>Search your favourite movies</p>
          <Link to="/Movies">
            <button>EXPLORE NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
