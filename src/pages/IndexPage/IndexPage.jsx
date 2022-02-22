import { useEffect, useState } from "react";
import axios from "axios";
import CardOompa from "../../components/CardOompa/CardOompa";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./IndexPage.css";

const IndexPage = () => {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [canFetch, setCanFetch] = useState(true);

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

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa ge=1"
  //     )
  //     .then((response) => {
  //       setData(response.data.results);
  //       setFilteredData(response.data.results);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    if (data.length === filteredData.length) {
      axios
        .get(
          `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa ge=${updateData}`
        )
        .then((response) => {
          setData([...data, ...response.data.results]);
          setFilteredData([...data, ...response.data.results]);
          setCanFetch(true);
        })
        .catch((err) => console.log(err));
    }
  }, [updateData]);

  window.onscroll = function (ev) {
    if (
      canFetch &&
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight
    ) {
      setUpdateData(updateData + 1);
      setCanFetch(false);
    }
  };

  return (
    <>
      <SearchBar search={search} />
      <div className="container-oompas">
        {data &&
          data.map((item) => {
            return (
              <div key={data.indexOf(item)} className="container-card">
                <CardOompa item={item} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default IndexPage;
