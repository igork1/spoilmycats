const { default: axios } = require('axios');

const getMyCats = async () => {
  try {
    const { data } = await axios.get('/catsapi/v1/cats');
    return data;
  } catch (error) {
    return false;
  }
};

export default getMyCats;
