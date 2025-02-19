import React, { RefObject } from 'react';

const UseKeyPress = (ref: RefObject<HTMLElement>) => {
    const [key, setKey] = React.useState<string>();

    const handleKeyDown = ({ key }: KeyboardEvent) => setKey(key);

    React.useEffect(() => {
        if (!ref.current) return;

        ref.current.addEventListener('keydown', handleKeyDown);

        return () => {
            if (!ref.current) return;
            ref.current.removeEventListener('keydown', handleKeyDown);
        };
    }, [key]);

    return key;
};

export default UseKeyPress;
