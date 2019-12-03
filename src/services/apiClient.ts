import axios from 'axios';
import { ENV } from '../environment';
import { SORTING_TYPE } from '../types';

//Change this to change between local and "Production"
const rootUrl = ENV.PROD.API_ROOT;

const endpoints = {
    search: '/search'
}

export default class ApiClient {

    public async fetchApps() {
        axios.defaults.timeout = 30000
        let url=`${rootUrl}${endpoints.search}`
        try {
            let response = await axios.get(url, {
                params: {
                    keyword: 'Navigation',
                    sortby: SORTING_TYPE.TOTAL_SCORE
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    public async fetchSearchedApps(keyword: string, sortby: SORTING_TYPE) {
        console.log(keyword)
        axios.defaults.timeout = 30000
        let url=`${rootUrl}${endpoints.search}`
        try {
            let response = await axios.get(url, {
                params: {
                    keyword,
                    sortby
                }
            });
            console.log(response.data)
            if(response.data[0] == 'Nothing found') {
                throw new Error('Empty response')
            }
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}