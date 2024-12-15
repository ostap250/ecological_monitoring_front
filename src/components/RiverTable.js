import React, { useEffect, useState } from "react";
import axios from "axios";

const RiverTable = () => {
    const [rivers, setRivers] = useState([]);

    useEffect(() => {
        axios.get("/api/rivers/")
            .then(response => {
                setRivers(response.data);
            })
            .catch(error => {
                console.error("Error fetching rivers:", error);
            });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Назва</th>
                    <th>Індекс забруднення</th>
                    <th>Стан</th>
                </tr>
            </thead>
            <tbody>
                {rivers.map(river => (
                    <tr key={river.id}>
                        <td>{river.name}</td>
                        <td>{river.pollution_index}</td>
                        <td>{river.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default RiverTable;
