import axiosClient from "./axiosClient";

class TintucApi {
    getAll = (params) => {
        const url = '/tintucs';
        return axiosClient.get(url, { params });
    };
}
const tintucApi = new TintucApi();
export default tintucApi;