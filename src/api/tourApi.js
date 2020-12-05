import axiosClient from "./axiosClient";

class TourApi {
    getAll = (params) => {
        const url = '/tours';
        return axiosClient.get(url, { params });
    };
}
const tourApi = new TourApi();
export default tourApi;