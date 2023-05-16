import express from 'express';
import 'express-async-errors';
import path from 'path';
// * app config
const app = express();
// * public address from server root
const publicRouteFolder = path.join(process.cwd(), 'dist', 'public');
app.use(express.static(publicRouteFolder));
app.get('*', (req, res) => {
    res.sendFile(process.cwd() + '/dist/public/index.html');
});
// * start
const serverPort = 5000;
const serverListeningCb = () => {
    console.log(`server is listening to port ${serverPort}`);
};
const startServer = async () => {
    try {
        app.listen(serverPort, serverListeningCb);
    }
    catch (err) { }
};
startServer();
