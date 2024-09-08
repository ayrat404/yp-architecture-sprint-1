module.exports = {
    name: "auth", 
    filename: "remoteEntry.js", 
    exposes: {
        './Auth': './src/components/Auth.js',
    }, 
    shared: ["react", "react-dom"]
};