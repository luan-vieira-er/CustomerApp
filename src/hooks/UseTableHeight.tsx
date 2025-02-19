import React, { RefObject } from 'react';

import { useMobile } from 'context/Mobile';

const UseTableHeigth = (ref: RefObject<HTMLDivElement>) => {
    const { mobile } = useMobile();
    const mobileMenuHeight = 76;

    const [tableHeight, setTableHeight] = React.useState<number>();
    const [windowHeight, setWindowHeight] = React.useState<number>(window.innerHeight);

    React.useEffect(() => {
        handleSize();

        window.addEventListener('resize', () => setWindowHeight(window.innerHeight));
        return () =>
            window.removeEventListener('resize', () => setWindowHeight(window.innerHeight));
    }, [ref, windowHeight, tableHeight]);

    const handleSize = () => {
        if (!ref) return;

        const { top } = ref.current!.getBoundingClientRect();

        if (mobile) {
            return setTableHeight(windowHeight - top - mobileMenuHeight);
        }
        setTableHeight(windowHeight - top);
    };

    return tableHeight;
};

export default UseTableHeigth;
