import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json",
    },
});


export const getWaterBodies = async () => {
    const response = await apiClient.get("water-bodies/");
    return response.data;
};


export const getReportsForWaterBody = async (id) => {
    const response = await apiClient.get(`water-quality/${id}/quality-report/`);
    return response.data;
};


export const calculateWaterQuality = async (pollution, ph, temperature) => {
    const response = await apiClient.get("water-quality/fuzzy-water-quality/", {
        params: { pollution, ph, temperature },
    });
    return response.data;
};

export default apiClient;
