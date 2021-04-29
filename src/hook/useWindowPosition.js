import {useLayoutEffect, useState} from "react";

export default function useWindowPosition(id) {
    const [animation, setAnimation] = useState(false);

    useLayoutEffect(() => {
        function updatePosition() {
            const offesetHeight = window.document.getElementById(id).offsetHeight;
            if (window.pageYOffset > offesetHeight * 0.7) {
                setAnimation(true);
            }
        }

        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}