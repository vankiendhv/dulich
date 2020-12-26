import { message } from "antd";
import axiosClient from "./axiosClient";

class UserroleApi {
    getAll = (params) => {
        const url = '/userroles';
        return axiosClient.get(url, { params });
    };
    postuserrole = (params) => {
        const url = '/userroles';
        return axiosClient.post(url, params).then(data => {
            message.success("Thêm thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    deleteuserrole = (id) => {
        const url = `/userroles/${id}`;
        return axiosClient.delete(url).then(data => {
            message.success("Xoá thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    edituserrole = (params) => {
        const url = `/userroles/${params.idsua}`;
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }
}
const userroleApi = new UserroleApi();
export default userroleApi;