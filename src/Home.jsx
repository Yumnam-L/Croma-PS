import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const competitors = [
    { name: "Reliance Digital", stores: 500, revenue: "₹12,000 Cr" },
    { name: "Vijay Sales", stores: 250, revenue: "₹6,000 Cr" },
    { name: "Aditya Vision", stores: 80, revenue: "₹1,500 Cr" },
    { name: "Poojara", stores: 100, revenue: "₹2,000 Cr" },
    { name: "Bajaj Electronics", stores: 150, revenue: "₹3,500 Cr" },
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Croma Competitive Intelligence</h1>
      <div className="competitor-cards">
        {competitors.map((competitor, index) => (
          <Link to={`/company/${competitor.name}`} key={index}>
            <div className="card">
              <h3>{competitor.name}</h3>
              <p>Stores: {competitor.stores}</p>
              <p>Revenue: {competitor.revenue}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
