import React from 'react';
import logo from './logo.svg';
import './App.css';
import theArticles from "./articles.json";

function App() {
  return (
    <div className="App">
      <div className="articles__container">
        { theArticles.map(post => {
          return(
          <div className="articles__boxes">
          <div className="articles__content" key={post.id}>
          <img className="articles__image" src={post.image}></img>
          <h2 className="articles__title">{ post.title }</h2>
          <p className="articles__info">{ post.excerpt }</p>
          <span className="articles__category">{ post.category }</span>
          </div>
          </div>
          )
        }) }
      </div>
    </div>
  );
}

export default App;