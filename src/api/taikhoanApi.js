import { message } from "antd";
import axiosClient from "./axiosClient";

class TaikhoanApi {
    getAll = (params) => {
        const url = '/users';
        return axiosClient.get(url, { params });
    };
    getOne = (params) => {
        const url = `/users/${params}`;
        return axiosClient.get(url);
    };
    postuser = (params) => {
        const url = '/users';
        return axiosClient.post(url, params).then(data => {
            message.success("Tạo tài khoản thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    deleteuser = (id) => {
        const url = `/users/${id}`;
        return axiosClient.delete(url).then(data => {
            message.success("Xoá thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    edituser = (params) => {
        const url = `/users/${params.idsua}`;
        console.log(params, url);
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }
}
const taikhoanApi = new TaikhoanApi();
export default taikhoanApi;