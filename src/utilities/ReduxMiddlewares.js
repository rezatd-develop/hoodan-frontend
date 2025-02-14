'use client'

import { setDictionary } from "@/redux/dictionarySlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function ReduxMiddlewares({ t, lang, children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadDictionary = async () => {
            dispatch(setDictionary(t));
        };
        loadDictionary();
    }, [lang]);

    return children;
}