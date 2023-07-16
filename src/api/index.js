import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = async () => {
    const outlet = await axios.get(`https://de-taste-rest-api-production.up.railway.app/restaurant/`);
    return outlet.data;
}


export const useFilter = async (name) => {
    const outlet = await axios.get(`https://de-taste-rest-api-production.up.railway.app/restaurant`, {
        params : {
            name : name,
        }
    });
    return outlet.data;
}

export const getByType = async (type) => {
    const outlet = await axios.get(`https://de-taste-rest-api-production.up.railway.app/restaurant`, {
        params : {
            type : type,
        }
    });
    return outlet.data;
}

export const getByLocation = async (region) => {
    const outlet = await axios.get(`https://de-taste-rest-api-production.up.railway.app/restaurant`, {
        params : {
            region : region,
        }
    });
    return outlet.data;
}