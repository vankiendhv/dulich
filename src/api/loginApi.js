import { message } from "antd";
import axiosClient from "./axiosClient";

class LoginApi {
    login = (params) => {
        const url = '/login';
        console.log(params);
        return axiosClient.post(url, params).then(data => {
            // message.success(data.data);
            console.log(data);
        }).catch(err => {
            message.error(err);
        });
    };

}
const loginApi = new LoginApi();
export default loginApi;