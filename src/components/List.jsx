import React, { useEffect, useState } from "react";
import { champs } from "../champs";
import Template from "./listtemplate";
import Modalstats from "./ModalStats";
import Footer from "./footer";

function List() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState();

  const debounce = (_function, timeout = 500) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        _function.apply(this, args);
      }, timeout);
    };
  };

  const setDebounceSearch = (e) => {
    const search = e.target.value;
    if (search) {
      const regex = new RegExp(search, "gmi");
      const filtered = champs?.filter((raw) => {
        const { champname, abgeschlossen, datum } = raw;
        if (champname.search(regex) >= 0) {
          return data;
        } else if (abgeschlossen.search(regex) >= 0) {
          return data;
        } else if (datum.search(regex) >= 0) {
          return data;
        }
      });
      setData(filtered);
    } else {
      setData(champs);
    }
  };
  const inputProcess = debounce((e) => setDebounceSearch(e));

  const listClickHandler = (id) => {
    const modal = champs.filter(({ nr }) => nr == id);
    setModalData(modal[0]);
  };

  useEffect(() => {
    setTimeout(() => {
      setData(champs);
    }, 500);
  }, []);

  return (
    <div>
      <section className="" id="home">
        <nav className="navbar cutter-2">
          <div>
            <table className="center">
              <tbody>
                <tr>
                  <th className="controll head">
                    <h3>Übersicht</h3>
                  </th>
                  <th className="controll" onClick={() => setModalOpen(true)}>
                    <a href="#home">Statistiken</a>
                  </th>
                  <th className="controll">
                    <a href="https://docs.google.com/spreadsheets/d/1TOWEClVDQIMgtDoGBmVDs1jbxSK4b9-a/edit#gid=451768778">
                      Mehr Informationen
                    </a>
                  </th>
                  <th className="Axess controll">
                    alle daten stammen von Axess22
                  </th>
                  <th className="search">
                    <input
                      type="search"
                      placeholder="Search..."
                      onChange={inputProcess}
                    />
                    <i className="bx bx-search-alt-2 lupe"></i>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </nav>
        {modalOpen && <Modalstats setOpenModal={setModalOpen} />}
        {data.length ? (
          data?.map((champItem) => (
            <Template
              key={champItem.nr}
              nr={champItem.nr}
              image={champItem.imgurl}
              name={champItem.champname}
              tries={champItem.tries}
              abgeschlossen={champItem.abgeschlossen}
              datum={champItem.datum}
              stats={champItem.stats}
              yt={champItem.yt}
              tw={champItem.tw}
              data={modalData}
              click={listClickHandler}
            />
          ))
        ) : (
          <div className="loader">
            <img src="/assets/loader.svg" alt="loader" />
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}

export default List;
