import { configureStore } from '@reduxjs/toolkit';
import anhReducer from "../features/container/admin/Anh/anhSlice";
import binhluanReducer from "../features/container/admin/Binhluan/binhluanSlice";
import chiphiReducer from "../features/container/admin/Chiphi/chiphiSlice";
import diadiemReducer from "../features/container/admin/DiaDiem/diadiemSlice";
import dichvuReducer from "../features/container/admin/Dichvu/dichvuSlice";
import chitieuReducer from "../features/container/admin/Doanhthu/chitieuSlice";
import userroleReducer from "../features/container/admin/header/userroleSlice";
import hoadonReducer from "../features/container/admin/Hoadon/hoadonSlice";
import khuyenmaiReducer from "../features/container/admin/Khuyenmai/khuyenmaiSlice";
import thongbaoReducer from "../features/container/admin/Kiemduyet/thongbaoSlice";
import lienheReducer from "../features/container/admin/Lienhe/lienheSlice";
import loaitourReducer from "../features/container/admin/Loaitour/loaitourSlice";
import ngaydiReducer from "../features/container/admin/Ngaydi/ngaydiSlice";
import quocgiaReducer from "../features/container/admin/Quocgia/quocgiaSlice";
import roleReducer from "../features/container/admin/Role/roleSlice";
import taikhoanReducer from '../features/container/admin/taikhoan/taikhoanSlice';
import tintucReducer from "../features/container/admin/tintuc/tintucSlice";
import tourReducer from "../features/container/admin/Tour/tourSlice";
import thanhtoanReducer from "../features/container/detailtour/tour/thanhtoanSlice";
import inforReducer from "../features/container/login/inforSlice";
import userReducer from './userSlice';
const rootReducer = {
    tintucs: tintucReducer,
    user: userReducer,
    taikhoan: taikhoanReducer,
    quocgias: quocgiaReducer,
    loaitours: loaitourReducer,
    diadiems: diadiemReducer,
    tours: tourReducer,
    binhluans: binhluanReducer,
    anhs: anhReducer,
    dichvus: dichvuReducer,
    hoadons: hoadonReducer,
    roles: roleReducer,
    lienhes: lienheReducer,
    ngaydis: ngaydiReducer,
    userroles: userroleReducer,
    infor: inforReducer,
    chitieu: chitieuReducer,
    khuyenmais: khuyenmaiReducer,
    thanhtoans: thanhtoanReducer,
    chiphis: chiphiReducer,
    thongbao: thongbaoReducer
}

export default configureStore({
    reducer: rootReducer
});
