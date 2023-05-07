import React, { useEffect, useState } from 'react'


const ServiceDetail = React.memo(({ dataService, listActive, total = 1, onUpdateTotalService }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let arr = []
        listActive.forEach(item => {
            arr.push({ ...dataService.find(x => x.value === item), totalItem: 0 })
        });
        setData(arr)
    }, [listActive, dataService]);

    const handleOnChange = (event) => {
        const { value, id } = event.target
        if (value <= total) {
            let index = data.findIndex(x => x.value === +id)
            let newData = [...data];
            newData[index] = { ...newData[index], totalItem: value }
            let total = newData.reduce((prev, current) => prev + +current.totalItem * current.price, 0)
            onUpdateTotalService(total)
            setData(newData)
        }
    }

    return (
        <ul>
            {
                data.map(item =>
                (
                    <li key={item.value} style={{
                        padding: "5px 0",
                        listStyleType: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <span>{item.label}:</span>
                        <input
                            className="form-control"
                            style={{ display: "inline-block", marginLeft: 10, width: 100 }}
                            type="number"
                            id={item.value}
                            onChange={handleOnChange}
                            value={item.totalItem}
                            max={total}
                            min={1} />
                    </li>
                ))
            }
        </ul>
    )
});

export default ServiceDetail;