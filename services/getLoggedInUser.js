import axios from 'axios';

const getLoggedInUser = async () => {
  try {
    const { data } = await axios.get('/catsapi/v1/auth/me');
    return data;
  } catch (error) {
    return false;
  }
};

export default getLoggedInUser;
