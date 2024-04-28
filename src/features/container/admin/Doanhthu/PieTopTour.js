import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Tooltip, PieChart, Pie, Cell, Legend } from "recharts";

export default function PieTopTour() {
  const [data, setData] = useState([]);
  const sortData = (data) => {
    return data.sort((a, b) => b.count - a.count);
  };

  useEffect(() => {
    Axios.get("http://localhost:666/tours/topTour").then((value) => {
      const data = sortData(value.data.data);
      setData(
        data.map((ok) => ({
          name: ok.name,
          value: ok.count,
        })),
      );
    });
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{ display: "flex", padding: "3px 0", alignItems: "center" }}
          >
            <div
              className="color_status"
              style={{
                backgroundColor: entry.color,
                width: 20,
                height: 15,
                marginRight: 10,
                fontSize: 16,
                borderRadius: 3,
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              }}
            ></div>
            {entry.value}({entry.payload.value})
          </li>
        ))}
      </ul>
    );
  };

  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={200}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        className="legend_pie"
        layout="vertical"
        align="right"
        verticalAlign="middle"
        content={renderLegend}
      />
      <Tooltip />
    </PieChart>
  );
}
