import { BeatLoader } from "react-spinners";
import "./CardOompaDetails.css";

const CardOompaDetail = (props) => {
  const { data, loadData } = props;

  if (loadData) {
    const parser = new DOMParser();
    const parseDescription = parser.parseFromString(
      data.description,
      "text/html"
    );
    const divDescription = document.querySelector("#div-description");
    divDescription.appendChild(parseDescription.body);
  }

  return data ? (
    <div className="container-oompa-details">
      <div>
        <img src={data.image} alt="oompa image" width="700" />
      </div>
      <div className="container-info">
        <h4>{`${data.first_name} ${data.last_name}`}</h4>
        {data.gender === "M" ? <p>Male</p> : <p>Female</p>}
        <div id="div-description"></div>
      </div>
    </div>
  ) : (
    <div className="center-spinner">
      <BeatLoader color="rgb(217,216,216)" size="100px" />
    </div>
  );
};

export default CardOompaDetail;
