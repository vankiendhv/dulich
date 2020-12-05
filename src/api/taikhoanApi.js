import axiosClient from "./axiosClient";

class TaikhoanApi {
    getAll = (params) => {
        const url = '/users';
        return axiosClient.get(url, { params });
    };
}
const taikhoanApi = new TaikhoanApi();
export default taikhoanApi;