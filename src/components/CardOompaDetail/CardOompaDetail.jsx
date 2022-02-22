import "./CardOompaDetails.css";

const CardOompaDetail = (props) => {
  const { data } = props;
  console.log(data);
  return data ? (
    <div className="container-oompa-details">
      <div>
        <img src={data.image} alt="oompa image" width="700" />
      </div>
      <div className="container-info">
        <h4>{`${data.first_name} ${data.last_name}`}</h4>
        {data.gender === "M" ? <p>Male</p> : <p>Female</p>}
        <p>{data.profession}</p>
        <p>{data.description}</p>
      </div>
    </div>
  ) : (
    <h1>loading</h1>
  );
};

export default CardOompaDetail;
