export const pVariants = {
  hidden_left: { x: -100, opacity: 0 },
  hidden_rigth: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  transition_horizontal: { delay: 0.5, ease: 'easeOut' },
};

export const listVariants = {
  visible: index => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.01, delay: index * 0.5 },
  }),
  hidden: { opacity: 0, y: -100 },
};

export const iconVariants = {
  start: { rotate: -20 },
  end: { rotate: 20 },
  transition_icons: {
    ease: 'easeOut',
    duration: 1,
    repeat: Infinity,
    repeatType: 'reverse',
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.2,
    boxShadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px, rgba(0, 0, 0, 0.2) 0px 2px 1px',
    texShadow:
      'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.14) 0px 1px 1px, rgba(0, 0, 0, 0.2) 0px 2px 1px',
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 0.45,
    },
  },
};

export const portfolioPosterVariants = {
  start: { rotate: 0, scale: 1.1 },
  end: { rotate: 10, scale: 1.2 },
  transition_img: {
    ease: 'easeOut',
    duration: 8,
    repeat: Infinity,
    repeatType: 'reverse',
  },
};
