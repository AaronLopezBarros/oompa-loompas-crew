import { Link } from "react-router-dom";
import "./CardOompa.css";

const CardOompa = (props) => {
  const { item } = props;

  return (
    <div className="card">
      <Link to={`/oompa/${item.id}`}>
        <img src={item.image} width="400" />
        <div>
          <h4>{`${item.first_name} ${item.last_name}`}</h4>
          {item.gender === "M" ? <p>Male</p> : <p>Female</p>}
          <p>{item.profession}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardOompa;
