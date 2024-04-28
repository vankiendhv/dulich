import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function BarLoiNhuan({ usd }) {
  const HoaDon = useSelector((state) => state.hoadons.hoadon.data);
  const [data, setData] = useState([]);

  useEffect(() => {
    const date = new Date();
    const HoaDonNamNay = HoaDon.filter((x) =>
      x.createdAt.includes(date.getFullYear()),
    );
    const valueData = [];
    for (let i = 0; i < 12; i++) {
      const HoaDonThang = HoaDonNamNay.filter((x) =>
        x.createdAt.includes(
          date.getFullYear() + "-" + (i + 1).toString().padStart(2, "0"),
        ),
      );
      console.log("HoaDonThang:", HoaDonThang);
      valueData.push({
        name: "tháng " + (i + 1),
        "số tiền": (
          HoaDonThang.reduce((a, b) => a + b.thanhtien, 0) / usd
        ).toFixed(0),
      });
    }
    setData(valueData);
  }, [HoaDon, usd]);

  return (
    <BarChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar
        dataKey="số tiền"
        fill="#8884d8"
        activeBar={<Rectangle fill="pink" stroke="blue" />}
      />
    </BarChart>
  );
}
