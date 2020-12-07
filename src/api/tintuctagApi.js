import { message } from "antd";
import axiosClient from "./axiosClient";

class TintuctagApi {
    getAll = (params) => {
        const url = '/tintuctags';
        return axiosClient.get(url, { params });
    };
    posttintuctag = (params) => {
        const url = '/tintuctags';
        return axiosClient.post(url, params).then(data => {
            message.success("Thêm thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    deletetintuctag = (id) => {
        const url = `/tintuctags/${id}`;
        return axiosClient.delete(url).then(data => {
            message.success("Xoá thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
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