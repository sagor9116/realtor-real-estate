import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                'x-rapidapi-host': 'bayut.p.rapidapi.com',
                'x-rapidapi-key':
                    'b614a68707msha2b052a4a41205dp182147jsn486bd19dcb12',
            },
        });

        return data;
    } catch (error) {
        console.log(error);
    }
};
