import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardOompaDetail from "../../components/CardOompaDetail/CardOompaDetail";

const OompaDetailsPage = () => {
  const oompaId = useParams().id;
  const [data, setData] = useState();
  const [loadData, setLoadData] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${oompaId}`
      )
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
