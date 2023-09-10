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
