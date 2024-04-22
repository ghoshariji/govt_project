// UnRegisteredIndustryTable.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UnRegisteredIndustryTable = () => {
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

    const registerMe = async (indusID, indusName) => {
        try {
            const cnfm = window.confirm(`This will add ${indusName} to the registered Industries. Are you sure ?`);
            if (cnfm) {
                const response = await axios.put("http://localhost:8000/api/industry/registration", { industry_id: indusID });
                if (response.status === 200) {
                    console.log("DONE");
                    window.location.reload();
                } else {
                    console.log("Some error occurred");
                }
            }
            else {
                return;
            }
        } catch (e) {
            console.log("Could not Register, Try again")
        }
    }

    const DeleteMe = async (indusID, indusName) => {
        try {
            const cnfm = window.confirm(`This will Remove the data of ${indusName}. Are you sure ?`);
            if (cnfm) {
                const response = await axios.delete(`http://localhost:8000/api/industry/delete?industry_id=${indusID}`);
                if (response.status === 200) {
                    console.log("DONE");
                    window.location.reload();
                } else {
                    console.log("Some error occurred");
                }
            } else {
                return;
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    // Filter industries where is_registered is false
    const unregisteredIndustries = industryData.filter(industry => !industry.is_registered);

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
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {unregisteredIndustries.map(industry => (
                        <tr key={industry.industry_id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{industry.industry_id}</td>
                            <td className="px-6 py-4">{industry.industry_name}</td>
                            <td className="px-6 py-4">
                                <button onClick={() => registerMe(industry.industry_id, industry.industry_name)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Register</button>
                                <button onClick={() => DeleteMe(industry.industry_id, industry.industry_name)} className="font-medium text-red-600 dark:text-red-500 hover:underline ml-2">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UnRegisteredIndustryTable;
