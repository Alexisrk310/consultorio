import { useState } from 'react';

export const useForm = (initialState) => {
    const [formAuth, setFormAuth] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        return setFormAuth({
            ...formAuth,
            [name]: value,
        });
    };

    return { handleChange, formAuth, setFormAuth };
};