const particleOptions = {
  background: {
    color: {
      value: "#1a1a28",
    },
  },
  fpsLimit: 1000,
  //   interactivity: {
  //     events: {
  //       onClick: {
  //         enable: true,
  //         mode: "push",
  //       },
  //       onHover: {
  //         enable: true,
  //         mode: "repulse",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       push: {
  //         quantity: 4,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //     },
  //   },
  particles: {
    color: {
      value: "#ffffff",
    },
    // links: {
    //   color: "#ffffff",
    //   distance: 150,
    //   enable: true,
    //   opacity: 0.2,
    //   width: 1,
    // },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 0.2,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default particleOptions;
