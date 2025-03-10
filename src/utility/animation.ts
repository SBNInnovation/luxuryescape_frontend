import { TargetAndTransition, Variants } from "framer-motion";

interface ThumbnailCustom {
    index: number;
    isActive: boolean;
}

const widthScreen = () => window.innerWidth;

export const mainSlideVariants: Variants = {
    initial: (direction: number) => ({
        opacity: 0,
        x: direction * 100, // Horizontal slide for both mobile and desktop
        filter: 'blur(8px)',
    }),
    animate: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        }
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction * -100, // Horizontal exit for both mobile and desktop
        filter: 'blur(8px)',
        transition: {
            duration: 0.8,
            ease: 'easeIn',
        }
    })
};

// Image specific variants with horizontal movement for both mobile and desktop
export const imageVariants: Variants = {
    initial: (direction: number) => ({
        opacity: 0,
        x: direction * 100,
        scale: 0.95,
        filter: 'blur(8px)',
    }),
    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction * -100,
        scale: 0.95,
        filter: 'blur(8px)',
        transition: {
            duration: 0.8,
            ease: 'easeIn',
        },
    }),
};

// Thumbnail animation variants
export const thumbnailVariants: Variants = {
    initial: {
        opacity: 0,
        y: widthScreen() < 768 ? 0 : 20,
        filter: 'blur(4px)',
    },
    animate: ({ index, isActive }: ThumbnailCustom): TargetAndTransition => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: isActive ? 1.1 : 1,
        transition: {
            duration: 0.8,
            delay: index * 0.1,
            ease: 'easeOut',
        }
    }),
    hover: {
        scale: 1.02,
        transition: {
            duration: 0.2,
            ease: 'easeInOut',
        }
    },
    tap: {
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }
    }
};

// Text variants that slide horizontally for both mobile and desktop
export const textVariants: Variants = {
    initial: (direction: number) => ({
        opacity: 0,
        x: direction * 50,
        filter: 'blur(4px)',
    }),
    animate: {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        }
    },
    exit: (direction: number) => ({
        opacity: 0,
        x: direction * -50,
        filter: 'blur(4px)',
        transition: {
            duration: 0.3,
            ease: 'easeIn',
        }
    })
};