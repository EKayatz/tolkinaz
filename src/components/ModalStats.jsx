import React from "react";
import "./Modal.css";
import stats from "../stats";
import Card from "./Card";

function Modalstats({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div>
          <div>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <a href="/" role="button" className="titleCloseBtnstats">
                <i className="fas fa-times"></i>
              </a>
            </button>
          </div>
          <Card
            key={stats[0].id}
            WinsBlue={stats[0].WinsBlue}
            WinsRed={stats[0].WinsRed}
            Wins={stats[0].Wins}
            Games={stats[0].Games}
            GamesRed={stats[0].GamesRed}
            GamesBlue={stats[0].GamesBlue}
            top={stats[0].top}
            topwin={stats[0].topwin}
            jngl={stats[0].jngl}
            jnglwin={stats[0].jnglwin}
            mid={stats[0].mid}
            midwin={stats[0].midwin}
            bot={stats[0].bot}
            botwin={stats[0].botwin}
            sup={stats[0].sup}
            supwin={stats[0].supwin}
            Kills={stats[0].Kills}
            deaths={stats[0].deaths}
            Assists={stats[0].Assists}
            Solokills={stats[0].Solokills}
          />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Modalstats;
