import axiosClient from "./axiosClient";

class TintucApi {
    getAll = (params) => {
        const url = '/products';
        return axiosClient.get(url, { params });
    };
}
const tintucApi = new TintucApi();
export default tintucApi;