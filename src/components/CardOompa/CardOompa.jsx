const CardOompa = (props) => {
  const { item } = props;
  return (
    <div style={{ width: "18rem" }}>
      <img src={item.image} width="300" />
      <div>
        <h4>{item.first_name}</h4>

        <p>{item.gender}</p>
        <p>{item.profession}</p>
      </div>
    </div>
  );
};

export default CardOompa;
