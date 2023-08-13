'use client'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import {motion, useAnimationControls, useScroll, Variants} from "framer-motion";

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

const ScrollToTopContainerVariants: Variants = {
    hide: {opacity: 0, y: 100},
    show: {opacity: 1, y: 0},
};

const ScrollToTopButton = () => {
    const {scrollY} = useScroll();
    const controls = useAnimationControls();

    useEffect(() => {
        return scrollY.on('change', (latestValue) => {
            controls.start(latestValue > 0.025 ? 'show' : 'hide').then(_ => {
            });
        });
    });

    return (
        <motion.button
            className="fixed bottom-0 end-0 w-14 h-14 m-12 md:m-24 bg-bittersweet rounded-xl"
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} className="text-background-color"/>
        </motion.button>
    );
}

export default ScrollToTopButton;