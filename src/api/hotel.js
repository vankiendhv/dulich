import { message } from "antd";
import axiosClient from "./axiosClient";

class HotelApi {
    getAll = (params) => {
        const url = '/hotels';
        return axiosClient.get(url, { params }).then(data => data.data);
    };
    getOne = (id) => {
        const url = `/hotels/${id}`;
        return axiosClient.get(url).then(data => data.data)
    };
    postHotel = (params) => {
        const url = '/hotels';
        return axiosClient.post(url, params).then(data => {
            message.success("Thêm thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    deleteHotel = (id) => {
        const url = `/hotels/${id}`;
        return axiosClient.delete(url).then(data => {
            message.success("Xoá thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    };
    editHotel = (params) => {
        const url = `/hotels/${params.id}`;
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }
}
const hotelApi = new HotelApi();
export default hotelApi;