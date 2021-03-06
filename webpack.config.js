module.exports = {
    entry: "./src/ts/cl.ts",
    output: {
        filename: "cl.js",
        path: __dirname + "/dist/js"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".js"]
    },

    module: {
        rules: [
            { test: /\.ts?$/, loader: "awesome-typescript-loader" },

            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};
