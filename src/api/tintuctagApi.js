import { message } from "antd";
import axiosClient from "./axiosClient";

class TintuctagApi {
    getAll = (params) => {
        const url = '/tintuctags';
        return axiosClient.get(url, { params });
    };
    posttintuctag = async (params) => {
        const url = '/tintuctags';
        return await axiosClient.post(url, params)
    };
    deletetintuctag = async (id) => {
        const url = `/tintuctags/${id}`;
        return await axiosClient.delete(url);
    };
    edittintuctag = (params) => {
        const url = `/tintuctags/${params.idsua}`;
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }
}
const tintuctagApi = new TintuctagApi();
export default tintuctagApi;