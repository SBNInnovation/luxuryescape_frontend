import { TargetAndTransition, Variant, Variants } from "framer-motion";


interface ThumbnailCustom {
    index: number;
    isActive: boolean;
}

export const mainSlideVariants: Variants = {
    initial: Variant => ({
        opacity: 0,
        y: 50,
        filter: 'blur(8px)',
    }),
    animate: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
        duration: .8,
        ease: 'easeOut',
        }
    },
    exit: Variant => ({
        opacity: 0,
        y: -50,
        filter: 'blur(8px)',
        transition: {
        duration: 0.8,
        ease: 'easeIn',
        }
    })
    };

    // Thumbnail animation variants
    export const thumbnailVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
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
    
    tap: {
        scale: 1,
        transition: {
        duration: 0.5,
        ease: 'easeInOut',
        }
    }
    };

    export const textVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
        filter: 'blur(4px)',
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
        duration: 0.5,
        ease: 'easeOut',
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        filter: 'blur(4px)',
        transition: {
        duration: 0.3,
        ease: 'easeIn',
        }
    }
    };

    export const badgeVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.8,
        filter: 'blur(4px)',
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
        duration: 0.3,
        delay: 0.2,
        ease: 'easeOut',
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        filter: 'blur(4px)',
        transition: {
        duration: 0.2,
        ease: 'easeIn',
        }
    }
    };

    export const buttonVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
        duration: 0.2,
        ease: 'easeOut',
        }
    },
    hover: {
        scale: 1.1,
        transition: {
        duration: 0.2,
        ease: 'easeInOut',
        }
    },
    tap: {
        scale: 0.95,
        transition: {
        duration: 0.1,
        ease: 'easeInOut',
        }
    },
    disabled: {
        opacity: 0.5,
        scale: 1,
        transition: {
        duration: 0.2,
        ease: 'easeInOut',
        }
    }
    };

    export const containerVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.5,
        ease: 'easeOut',
        staggerChildren: 0.1,
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
        duration: 0.3,
        ease: 'easeIn',
        }
    }
    };

    export const imageVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0,
        filter: 'blur(8px)',
    },
    animate: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            duration: .8,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        scale: 0,
        filter: 'blur(8px)',
        transition: {
            duration: 0.8,
            ease: 'easeIn',
        },
    },
};


    export const loadingVariants: Variants = {
    animate: {
        scale: [1, 1.1, 1],
        opacity: [0.5, 1, 0.5],
        transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
        }
    }
    };