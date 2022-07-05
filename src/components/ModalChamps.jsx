import React from "react";
import "./list.css";

function ModalChamp({ setOpenModal, data }) {
  const { champname, datum, tries, abgeschlossen, stats, yt, tw } = data;

  return (
    <div className="modalBackground champs__list__container">
      <div className="modalContainer">
        <div>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <div href="#" role="button" className="titleCloseBtn">
              <i className="fas fa-times"></i>
            </div>
          </button>
        </div>
        <div>
          <h3 className="champs__champstitle">{champname}</h3>
          <div className="champs__champstatsmaster">
            <br />
            <div className="champs__champstatsmasterlt">
              <p>Status: {abgeschlossen}</p>
              {datum ? <div>Wann: {datum}</div> : <div></div>}
              {tries ? <div>Versuche: {tries}</div> : <div></div>}
            </div>
          </div>
          <div className="champs__statstries">
            {stats ? <p>Stats: {stats}</p> : <div></div>}
          </div>
          <div className="champs__socialchampstatsmaster">
            {yt ? (
              <div className="champs__socialchampstatsmaster">
                Youtube Video:
                <a href={yt} className="champs__link home__social-link">
                  <i className="bx bxl-youtube"></i>
                </a>
              </div>
            ) : (
              <div></div>
            )}
            {tw ? (
              <div className="champs__socialchampstatsmaster">
                Twitch Clip:
                <a href={tw} className="home__social-link">
                  <i className="bx bxl-twitch"></i>
                </a>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default ModalChamp;
