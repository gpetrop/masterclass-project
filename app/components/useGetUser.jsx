import { useState, useEffect } from "react";

export default function useGetUser({ url, format, userResource }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`${url}/${userResource}?format=${format}`)
            .then((res) => res.json())
            .then((user) => {
                setUser(user);
            });
    }, []);

    return user;
}
