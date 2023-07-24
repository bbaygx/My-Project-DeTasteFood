import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = async () => {
    const outlet = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/restaurant/`);
    return outlet.data;
}


export const useFilter = async (name) => {
    const outlet = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/restaurant`, {
        params : {
            name : name,
        }
    });
    return outlet.data;
}

export const getByType = async (type) => {
    const outlet = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/restaurant`, {
        params : {
            type : type,
        }
    });
    return outlet.data;
}

export const getByLocation = async (region) => {
    const outlet = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/restaurant`, {
        params : {
            region : region,
        }
    });
    return outlet.data;
}