// File: DataProcessor.js

import React, { useState, useEffect } from 'react';

// CORRECT: Clear, descriptive function name and appropriate commenting
const processData = (rawData) => {
    // This function processes raw data into a format suitable for display
    // It filters out inactive items and sorts by date
    const activeItems = rawData.filter(item => item.status === 'active');
    return activeItems.sort((a, b) => new Date(b.date) - new Date(a.date));
};

// INCORRECT: Poorly named function with unnecessary comments
const doStuff = (data) => {
    // This function does stuff with the data
    // It does things to the data
    // Then it returns the result
    return data.filter(x => x.y === 'z').sort((a, b) => b.d - a.d);
};

const DataProcessor = ({ rawData }) => {
    // CORRECT: Clear state naming
    const [processedData, setProcessedData] = useState([]);

    useEffect(() => {
        // Process data when rawData changes
        const result = processData(rawData);
        setProcessedData(result);

        // INCORRECT: Commented out code should be removed
        // const oldResult = doStuff(rawData);
        // setProcessedData(oldResult);

        // INCORRECT: Console.log should be removed before pushing
        console.log('Data processed:', result);
    }, [rawData]);

    // CORRECT: Clear, concise rendering logic
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

    // INCORRECT: Alternative rendering with poor practices
    // return (
    //     <div>
    //         <h2>Processed Data</h2>
    //         {console.log('Rendering processed data')} {/* Remove console.log */}
    //         <ul>
    //             {processedData.map((item, index) => {
    //                 console.log('Rendering item:', item); // Remove console.log
    //                 return <li key={index}>{item.name}</li>; // Use item.id instead of index for key
    //             })}
    //         </ul>
    //     </div>
    // );
};

export default DataProcessor;
