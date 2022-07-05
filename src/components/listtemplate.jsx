import React, { useState } from "react";
import ModalChamp from "./ModalChamps";
import "../components/list.css";

function Template(props) {
  const [modalOpen, setModalOpen] = useState(false);

  const listHandler = (id) => {
    props.click(id);
    setModalOpen(true);
  };

  return (
    <>
      <div className="champs__list__container">
        <div
          className="champs__lists"
          onClick={() => {
            listHandler(props.nr);
          }}
        >
          <div className="champs__image">
            <img src={props.image} alt="backdrop" />
          </div>
          <div className="champs__title">{props.name} :</div>
          {props.tries ? (
            <div className="champs__desc">Versuche: {props.tries}</div>
          ) : (
            <div></div>
          )}
          <div className="champs__desc">{props.abgeschlossen}</div>
          {props.datum ? (
            <div className="champs__date">Wann: {props.datum}</div>
          ) : (
            <div className="champs__date"></div>
          )}
        </div>
      </div>

      {modalOpen && (
        <ModalChamp setOpenModal={setModalOpen} data={props.data} />
      )}
    </>
  );
}

export default Template;
