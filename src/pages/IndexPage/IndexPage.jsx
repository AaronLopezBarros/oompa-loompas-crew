import { useEffect, useState } from "react";
import CardOompa from "../../components/CardOompa/CardOompa";
import SearchBar from "../../components/SearchBar/SearchBar";
import { BeatLoader } from "react-spinners";
import "./IndexPage.css";
import {getAllOompas} from "../../services/oompas.service";

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [loadingBottom, setLoadingBottom] = useState(false);
  const [loading, setLoading] = useState(true);

  //Función que le paso al searchbar para coger el value del input y hacer un filter sobre los oompas
  const search = (text) => {
    const searched = filteredData.filter((elem) => {
      return (
        elem.first_name.toLowerCase().includes(text.toLowerCase()) ||
        elem.last_name.toLowerCase().includes(text.toLowerCase()) ||
        elem.profession.toLowerCase().includes(text.toLowerCase())
      );
    });
    setData(searched);
  };

  useEffect(() => {

    //Verificamos que el usuario no este filtrando los oompas para poder hacer la llamada y actualizar la data
    if (data.length === filteredData.length) {
      getAllOompas(updateData)
        .then((response) => {
          setData([...data, ...response.data.results]);
          setFilteredData([...data, ...response.data.results]);
          setLoadingBottom(false);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [updateData]);

  //Funcion para checkear que el usuario esta en el bottom del screen para actualizar el hook y hacer una nueva llamada a la siguiente página para obtener los siguientes oompas de la api
  window.onscroll = function (ev) {
    if (
      data.length === filteredData.length &&
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
    ) {
      setUpdateData(updateData + 1);
      setLoadingBottom(true);
    }
  };

  return (
    <>
      <SearchBar search={search} />
      {!loading ? (
        <div className="container-oompas">
          {data.map((item) => {
            return (
              <div key={data.indexOf(item)} className="container-card">
                <CardOompa item={item} />
              </div>
            );
          })}
          {loadingBottom && (
            <div className="center-spinner">
              <BeatLoader color="rgb(217,216,216)" size="100px" />
            </div>
          )}
        </div>
      ) : (
        <div className="center-spinner">
          <BeatLoader color="rgb(217,216,216)" size="100px" />
        </div>
      )}
    </>
  );
};

export default IndexPage;
