module.exports = {
    name: "host",
    remotes: {
        "places": "places@http://localhost:3001/remoteEntry.js",
    },
    shared: ["react", "react-dom"]
};