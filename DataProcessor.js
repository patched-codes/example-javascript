import React, { useState, useEffect } from 'react';

const processData = (rawData) => {
    const activeItems = rawData.filter(item => item.status === 'active');
    return activeItems.sort((a, b) => new Date(b.date) - new Date(a.date));
};

const filterAndSortData = (data) => {
    return data.filter(x => x.y === 'z').sort((a, b) => b.d - a.d);
};

const DataProcessor = ({ rawData }) => {
    const [processedData, setProcessedData] = useState([]);

    useEffect(() => {
        const result = processData(rawData);
        setProcessedData(result);
    }, [rawData]);

    return (
        <div>
            <h2>Processed Data</h2>
            <ul>
                {processedData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataProcessor;