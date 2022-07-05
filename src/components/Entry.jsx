import React from "react";
import Template from "./listtemplate";

function Entry(ChampsTerm) {
  return (
    <Template
      key={ChampsTerm.nr}
      image={ChampsTerm.imageurl}
      name={ChampsTerm.champname}
      abgeschlossen={ChampsTerm.abgeschlossen}
      datum={ChampsTerm.datum}
      tries={ChampsTerm.stats}
    />
  );
}

export default Entry;
