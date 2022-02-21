import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import CardOompa from "../../components/CardOompa/CardOompa";
import "./IndexPage.css";
const IndexPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa ge=1"
      )
      .then((response) => setData(response.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Container className="container-oompas">

        {data &&
          data.map((item) => {
            return (
                <Container className="container-card">
                <CardOompa item={item} />
                </Container>
            );
          })}
      </Container>
    </>
  );
};

export default IndexPage;
