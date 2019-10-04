import { useState, useEffect } from "react";

export default function useGetEmployee({ url, format, employeeResource }) {
    const [employees, selectedEmployee] = useState(0);

    useEffect(() => {
        fetch(`${url}/${employeeResource}?format=${format}`)
            .then((res) => res.json())
            .then((employees) => {
                selectedEmployee(employees);
            });
    }, []);

    return employees;
    console.log("inside use hook"+JSON.stringify(employees));
}
