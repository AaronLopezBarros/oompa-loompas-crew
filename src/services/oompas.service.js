import axios from "axios";

const getAllOompas = (updateData) => {
  return axios.get(
    `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?pa ge=${updateData}`
  );
};

const getOneOompa = (oompaId) => {
  return axios.get(
    `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${oompaId}`
  );
};

export {getAllOompas, getOneOompa};
