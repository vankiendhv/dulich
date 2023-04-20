import { message } from "antd";
import axiosClient from "./axiosClient";

class RoomApi {
    getAll = (params) => {
        const url = '/rooms/hotel/' + params.id;
        return axiosClient.get(url, { params }).then(data => data.data);
    };
    getOne = (id) => {
        const url = `/rooms/${id}`;
        return axiosClient.get(url).then(data => data.data)
    };
    postRoom = (params) => {
        const url = '/rooms';
        return axiosClient.post(url, params).then(data => {
            message.success("Thêm thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    deleteRoom = (id) => {
        const url = `/rooms/${id}`;
        return axiosClient.delete(url).then(data => {
            message.success("Xoá thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    addImg = (params) => {
        const url = `/rooms/addImg`;
        return axiosClient.post(url, params)
    };
    deleteImg = (id) => {
        const url = `/rooms/deleteImg/${id}`;
        return axiosClient.delete(url)
    };
    editRoom = (params) => {
        const url = `/rooms/${params.id}`;
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }

    offRoom = (params) => {
        const url = `/rooms/off/offRoom`;
        return axiosClient.patch(url, params).then(data => {
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }
}
const roomApi = new RoomApi();
export default roomApi;