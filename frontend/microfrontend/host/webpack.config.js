module.exports = {
    name: "host",
    remotes: {
        "auth": "auth@http://localhost:3001/remoteEntry.js",
        "profile": "profile@http://localhost:3002/remoteEntry.js",
        "places": "places@http://localhost:3003/remoteEntry.js",
    },
    shared: ["react", "react-dom"]
};