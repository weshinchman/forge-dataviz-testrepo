const { app, router } = require("./app.js");
const config = require('./config');
app.use(router);
const server = require("http").createServer(app);

if (config.azure.azure_conn_string) {
    require("./RealTimeApi.js").createSocketIOServer(server);
}

const PORT = process.env.PORT || 9000;

async function start() {
    try { server.listen(PORT, () => { console.log(`localhost: ${PORT}`); }); } catch (error) { console.log(error); }
} start();
