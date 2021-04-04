import React, { useState, useEffect } from "react";
import "./Player.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/1ad54fba-3d16-4408-ac7c-251b84b94d59")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

const [cart, setCart] = useState([]);
  const handelAddPlayers = (player)=> {
//  console.log(player);
const newCart =[...cart, player];
setCart(newCart);
}

let total = cart.reduce((total,plr)=>total+ plr.salery, 0)
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {
              players.map((player) => (
                <div className="col-md-4 mb-3">
                  <div className="card player">
                    <img className="card-img-top img-fluid" src={player.img} alt="Card cap" />
                    <div className="card-body">
                      <h5 className="card-title">{player.name}</h5>
                      <p className="card-text">Salary: ${player.salery}</p>
                      <button className="btn btn-primary" onClick={ ()=> handelAddPlayers(player)}  ><FontAwesomeIcon icon={faCreditCard} /> Select</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="col-md-4">
          <div className="cart-player px-3">
            <h3 className="text-center">Total Selected Player: {cart.length}</h3>

            <p><strong>Total cost:</strong>  ${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
