import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaMapMarkerAlt, FaRuler, FaUser } from 'react-icons/fa';

const ZoneInfo = () => {
    const [zoneInfo, setZoneInfo] = useState({});
    const [numOfIndustries, setNumOfIndustries] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { zone_id } = useParams();

    const fetchZoneInfo = async () => {
        try {
            const zoneResponse = await axios.post("http://localhost:8000/api/zone/", { zone_id: zone_id });
            setZoneInfo(zoneResponse.data[0]);
            const industryResponse = await axios.post("http://localhost:8000/api/industry", { zone_id: zone_id });
            setNumOfIndustries(industryResponse.data.count);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching zone info:", error);
            setError("Error fetching zone information. Please try again later."); // Set error message
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchZoneInfo();
    }, [zone_id]); // Fetch zone info when zone_id changes

    return (
        <div className="flex justify-center items-center mt-8">
            <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-md">
                {loading ? (
                    <div className="text-center text-gray-600 font-semibold">Loading...</div>
                ) : error ? (
                    <div className="text-center text-red-500 font-semibold">{error}</div>
                ) : (
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-red-900">Zone Information</h2>
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="mr-2 text-gray-500" />
                            <p className="text-sm text-gray-700"><strong>Name: </strong> {zoneInfo.zone_name}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaRuler className="mr-2 text-gray-500" />
                            <p className="text-sm text-gray-700"><strong>Zone Area: </strong> {zoneInfo.zone_area}</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaUser className="mr-2 text-gray-500" />
                            <p className="text-sm text-gray-700"><strong>Zone Admin Id: </strong> {zoneInfo.zonal_admin_id}</p>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-700"><strong>Number of Industries: </strong> {numOfIndustries}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ZoneInfo;
