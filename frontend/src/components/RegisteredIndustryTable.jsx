// RegisteredIndustryTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RegisteredIndustryTable = () => {
    const [industryData, setIndustryData] = useState([]);
    const { zone_id } = useParams();

    const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/industry/zoned", { zone_id: zone_id });
            setIndustryData(response.data);
        } catch (error) {
            console.error("Error fetching industry data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Filter industries where is_registered is true
    const registeredIndustries = industryData.filter(industry => industry.is_registered);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Industry ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Industry Name
                        </th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {registeredIndustries.map(industry => (
                        <tr key={industry.industry_id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{industry.industry_id}</td>
                            <td className="px-6 py-4">{industry.industry_name}</td>
                            {/* Render additional data here */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default RegisteredIndustryTable;
