import React, { useEffect, useState } from "react";
import tourApi from "../../../../api/tourApi";
import { useParams } from "react-router-dom";
import { Image, Spin, Table } from "antd";
export default function Customers(props) {
  const columns = [
    {
      title: "tên",
      dataIndex: "name",
    },
    {
      title: "email",
      dataIndex: "email",
    },
    {
      title: "ảnh",
      dataIndex: "avatar",
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
    },
    {
      title: "địa chỉ",
      dataIndex: "address",
    },
    {
      title: "ngày đặt",
      dataIndex: "date",
    },
  ];

  const { tourId } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    tourApi.getCustomers(tourId).then((data) => {
      if (data.data[0]?.Users) {
        setLoading(false);
        setData(data.data[0]?.Users);
      }
    });
  }, [tourId]);

  const convertTime = (date) => {
    // 2021-01-01T14:04:43.000Z
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const hours = date.substring(11, 13);
    const minutes = date.substring(14, 16);
    const seconds = date.substring(17, 19);
    return (
      day +
      "/" +
      month +
      "/" +
      year +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  };

  return (
    <div id="admin">
      <div className="heading">
        <h4>Khách đã đặt tour </h4>
        <div className="hr"></div>
      </div>
      <div className="content">
        {loading ? (
          <div className="spin">
            <Spin className="mt-5" />
          </div>
        ) : data.length ? (
          <Table
            columns={columns}
            dataSource={data.map((ok, index) => ({
              key: index + 1,
              name: ok.name,
              email: ok.email,
              avatar: (
                <Image src={ok.avatar} width="150px" height="200px" alt="" />
              ),
              phone: ok.sdt,
              address: ok.diachi,
              date: convertTime(ok.Hoadons.createdAt),
            }))}
          />
        ) : (
          <center>
            <h2>Chưa có khách nào đặt hàng!</h2>
          </center>
        )}
      </div>
    </div>
  );
}
