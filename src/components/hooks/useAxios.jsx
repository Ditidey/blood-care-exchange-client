import axios from 'axios';

const axiosFetching = axios.create({
    baseURL: 'http://localhost:5000/'
})
const useAxios = () => {
    return [axiosFetching]
};

export default useAxios;