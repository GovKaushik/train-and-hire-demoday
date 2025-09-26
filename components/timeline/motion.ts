// Enhanced motion variants for Phase B
export const revealParent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      duration: 0.3,
    },
  },
};

export const fadeUpSm = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
    },
  },
};

export const modalIn = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.16, 1, 0.3, 1], // More spring-like
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 24,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

export const railReveal = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.2,
    },
  },
};

// New enhanced hover animations
export const chipHover = {
  rest: {
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.2 }
  },
  hover: {
    scale: 1.05,
    y: -2,
    rotateX: 5,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

export const weekOvalHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2 }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

export const labelFloat = {
  rest: { y: 0 },
  hover: {
    y: -1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Progress indicator animation
export const progressReveal = {
  hidden: { scaleX: 0, originX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.8,
    }
  }
};

// Staggered chip reveal
export const chipReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};