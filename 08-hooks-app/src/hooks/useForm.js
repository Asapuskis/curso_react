import { useState } from "react"

// Hook para manejar formularios.
export const useForm = ( initialState = {} ) => {

    const [formValues, setFormValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [ target.name ]: target.value
        });
    };

    return {
        formValues,
        handleInputChange
    };

}
