import { nanoid } from "nanoid";
import { useCallback, useState } from "react";

export function useCollectionState() {

    const [items, setItems] = useState([]);

    const add = useCallback((data) => {
        const item = {
            ...data,
            id: nanoid()
        };
        setItems(prevItems => [...prevItems, item]);
    }, []);

    const remove = useCallback((id) => {
        setItems(prevItems =>
            prevItems.filter((item) => item.id !== id)
        );
    }, []);

    const modify = useCallback((id, updateCallback) => {
        setItems(prevItems =>
            prevItems.map((item) =>
                item.id === id ? updateCallback(item) : item
            )
        );
    }, []);

    const clear = useCallback(() => {
        setItems([]);
    }, []);

    const removeIf = useCallback((conditionCallback) => {
        setItems(prevItems =>
            prevItems.filter(item => conditionCallback(item))
        );
    }, []);

    return [items, { add, remove, removeIf, modify, clear }];
}