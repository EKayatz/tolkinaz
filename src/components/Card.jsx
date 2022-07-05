import React from "react";
import stats from "../stats";

function Card(props) {
  const winratered = (stats[0].WinsRed / stats[0].GamesRed) * 100;
  const winrateblue = (stats[0].WinsBlue / stats[0].GamesBlue) * 100;
  const winrate = (stats[0].Wins / stats[0].Games) * 100;
  const winratesup = (stats[0].supwin / stats[0].sup) * 100;

  const winratetop = (stats[0].topwin / stats[0].top) * 100;

  const winratejngl = (stats[0].jnglwin / stats[0].jngl) * 100;

  const winratemid = (stats[0].midwin / stats[0].mid) * 100;

  const winrateadc = (stats[0].botwin / stats[0].bot) * 100;
  console.log(stats[0].firsttry);
  return (
    <div className="champs__list__container ">
      <h1 className="champs__statstitle">Statistken A-Z Challenge Tolkin</h1>
      <div className="champs__stats">
        <h3>Champions: </h3>
        <div className="champs__desccard">insgesamt: {stats[0].champsall}</div>
        <div className="champs__desccard">abgeschlossen: {stats[0].Wins}</div>
        <div className="champs__datecard">Firsttry: {stats[0].firsttry}</div>
      </div>
      <div className="champs__stats">
        <h3>Stats: </h3>
        <div className="champs__desccard">Kills: {props.Kills}</div>
        <div className="champs__desccard">Tode: {props.deaths}</div>
        <div>Assists: {props.Assists}</div>
        <div className="champs__datecard">Solobolo: {props.Solokills}</div>
      </div>
      <div className="champs__stats">
        <h3>Games: </h3>
        <div className="champs__desccard">Games: {props.Games}</div>
        <div className="champs__desccard">Wins: {props.Wins}</div>
        <div className="champs__datecard">Winrate: {Math.floor(winrate)}%</div>
      </div>
      <div className="champs__stats">
        <h3>Redside: </h3>
        <div className="champs__desccard">GamesRedside: {props.GamesRed}</div>
        <div className="champs__desccard">WinsRedside: {props.WinsRed}</div>
        <div className="champs__datecard">
          Winratered: {Math.floor(winratered)}%
        </div>
      </div>
      <div className="champs__stats">
        <h3>Blueside: </h3>
        <div className="champs__desccard">WinsBlueside: {props.GamesBlue}</div>
        <div className="champs__desccard">GamesBlueside: {props.WinsBlue}</div>
        <div className="champs__datecard">
          WinrateBlue: {Math.floor(winrateblue)}%
        </div>
      </div>

      <div className="champs__stats">
        <h3>Toplane: </h3>
        <div className="champs__desccard">Games: {props.top}</div>
        <div className="champs__desccard">Wins: {props.topwin}</div>
        <div className="champs__datecard">
          Winratetop: {Math.floor(winratetop)}%
        </div>
      </div>

      <div className="champs__stats">
        <h3>Jungle: </h3>
        <div className="champs__desccard">Games: {props.jngl}</div>
        <div className="champs__desccard">Wins: {props.jnglwin}</div>
        <div className="champs__datecard">
          Winratejngl: {Math.floor(winratejngl)}%
        </div>
      </div>

      <div className="champs__stats">
        <h3>Midlane: </h3>
        <div className="champs__desccard">Games: {props.mid}</div>
        <div className="champs__desccard">Wins: {props.midwin}</div>
        <div className="champs__datecard">
          Winratemid: {Math.floor(winratemid)}%
        </div>
      </div>
      <div className="champs__stats">
        <h3>Botside: </h3>
        <div className="champs__desccard">Games: {props.bot}</div>
        <div className="champs__desccard">Wins: {props.botwin}</div>
        <div className="champs__datecard">
          Winratebot: {Math.floor(winrateadc)}%
        </div>
      </div>
      <div className="champs__stats">
        <h3>Support: </h3>
        <div className="champs__desccard">Games: {props.sup}</div>
        <div className="champs__desccard">Wins: {props.supwin}</div>
        <div className="champs__datecard">
          Winratesup: {Math.floor(winratesup)}%
        </div>
      </div>
    </div>
  );
}

export default Card;
