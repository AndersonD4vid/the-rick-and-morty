import React, { useState, useEffect } from "react";
import './global.css';
import './styles.css'
import api from "./services/api";

export default function App() {
  const [dadosApi, setDadosApi] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get("/character", {

      }).then((response) => {
        //console.log(response.data.results.slice(0, 20));
        setDadosApi(response.data.results.slice(0, 100));
      }).catch(() => {

      });

    }

    loadApi();

  }, [])



  return (
    <div className="container">
      <h1 className="titulo">The Rick and Morty Characters</h1>
      <div className="listagemItens">
        {dadosApi.map((item) => {
          return (
            <div key={item.id} className='card'>
              <div>
                <img
                  className='image'
                  src={item.image} alt={item.name} />
              </div>
              <div className="info">
                <strong>{item.name}</strong>
                <div className="status">
                  {item.status == 'Alive' ? <div className="alive"></div> : <div className="dead"></div>}
                  <span>{item.status}</span>
                </div>
                <span className="tituloItem">Specie: {item.species}</span>
                <span className="tituloItem">Gender: {item.gender}</span>
                <span className="tituloItem">Last known location: {item.location.name}</span>
                <span className="tituloItem">Origin: {item.origin.name}</span>
              </div>
            </div>

          )
        })}
      </div>

      <footer className="footer">
        <span>By: Anderson David</span>
      </footer>
    </div>
  );
}