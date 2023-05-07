import React, { useEffect, useState } from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import hoadonApi from '../../../../api/hoadonApi';

export default function Chart() {
    const [data, setData] = useState();

    useEffect(() => {
        hoadonApi.getStatistical().then(data => {
            let arrMoney = [];
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    const element = data[key];
                    arrMoney.push(element)
                }
            }
            setData({
                labels: ['ngày', 'tuần', 'tháng', 'năm'],
                datasets: [
                    {
                        label: "Thống kê",
                        data: arrMoney,
                        backgroundColor: [
                            "rgba(75,192,192,1)",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0",
                        ],
                        borderColor: "black",
                        borderWidth: 2,
                    },
                ],
            })
        })
    }, [])
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
            <div style={{ minWidth: 900 }}>
                {data && <Bar data={data} />}

            </div>
        </div>
    )
}
