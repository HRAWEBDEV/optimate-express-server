import express from 'express';
import 'express-async-errors';
import path from 'path';
// * app config
const app = express();
// * public address from server root
console.log();

const publicRouteFolder = path.join(process.cwd(), 'dist', 'public');
app.use(express.static(publicRouteFolder));
// * start
const serverPort = 5000;
const serverListeningCb = () => {
 console.log(`server is listening to port ${serverPort}`);
};
const startServer = async (): Promise<void> => {
 try {
  app.listen(serverPort, serverListeningCb);
 } catch (err) {}
};
startServer();
