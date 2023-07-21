import axios from 'axios';

const axiosFetching = axios.create({
    baseURL: 'https://blood-care-server.vercel.app/'
})
const useAxios = () => {
    return [axiosFetching]
};

export default useAxios;