import React, { useEffect, useRef, useState } from 'react'

const Countup = ({ start, end, timer }) => {
    const [isMounted, setIsMounted] = useState(false)
    const [state, setState] = useState(null);
    const ref = useRef(start);
    const acc = end / 200;
    const updateCounter = () => {

        if (ref.current < end) {
            const result = Math.ceil(ref.current + acc);
            if (result > end) return setState(end);
            setState(result);
            ref.current = result;
        }
        setTimeout(updateCounter, timer);
    };

    const onScroll = () => {
        if (window.scrollY >= 4800) {
            setIsMounted(true);
        }
        else {
            setIsMounted(false);
        }
    }
    window.addEventListener('scroll', onScroll)
    useEffect(() => {
        if (isMounted) {
            updateCounter();
        }

        return () => (setIsMounted(false));
    }, [isMounted])
    return (
        <>{state}</>
    )
}

export default Countup