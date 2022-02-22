import { getOneOompa } from "../../services/oompas.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardOompaDetail from "../../components/CardOompaDetail/CardOompaDetail";

const OompaDetailsPage = () => {
  const oompaId = useParams().id;
  const [data, setData] = useState();
  const [loadData, setLoadData] = useState(false);

  //Llamada a la api para obtener los detalles de un oompa pasandole el id
  useEffect(() => {
    getOneOompa(oompaId)
      .then((response) => {
        setData(response.data);
        setLoadData(true);
      })
      .catch((err) => console.log(err));

    return () => {
      setData();
    };
  }, []);

  return <CardOompaDetail loadData={loadData} data={data} />;
};

export default OompaDetailsPage;
