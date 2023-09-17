const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendUrl: "https://customprint-threejs-server.onrender.com/api/v1/dalle", //paste it on fetch function in Customize.jsx when backend is actually ready
  },
};

export default config;
