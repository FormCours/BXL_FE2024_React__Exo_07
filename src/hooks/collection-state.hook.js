import { nanoid } from "nanoid";
import { useState } from "react";

export function useCollectionState() {

    const [items, setItems] = useState([]);

    const add = (data) => {
        const item = {
            ...data,
            id: nanoid()
        };
        setItems(prevItems => [...prevItems, item]);
    };

    const remove = (id) => {
        setItems(prevItems =>
            prevItems.filter((item) => item.id !== id)
        );
    };

    const modify = (id, updateCallback) => {
        setItems(prevItems =>
            prevItems.map((item) =>
                item.id === id ? updateCallback(item) : item
            )
        );
    };

    const clear = () => {
        setItems([]);
    };

    const removeIf = (conditionCallback) => {
        setItems(prevItems =>
            prevItems.filter(item => conditionCallback(item))
        );
    };

    return [items, { add, remove, removeIf, modify, clear }];
}