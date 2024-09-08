module.exports = {
    name: "host",
    remotes: {
        "auth": "auth@http://localhost:8081/remoteEntry.js",
        "profile": "profile@http://localhost:8082/remoteEntry.js",
        "cards": "cards@http://localhost:8083/remoteEntry.js",
    },
    shared: ["react", "react-dom"]
};