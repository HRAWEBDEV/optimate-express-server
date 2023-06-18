import 'express-async-errors';
import path from 'path';
import http from 'http';
import https from 'https';
import express from 'express';
//@ts-ignore
import { Server as IoServer } from 'socket.io';
//@ts-ignore
import helmet from 'helmet';
import { errorHandler } from './middlewares/error-handler.js';
// * routes
import { router as userRouter } from './routes/v1/user.js';
// * app instance
const app = express();
const httpsServer = https.createServer(app);
const httpServer = http.createServer(app);
const io = new IoServer(httpServer);
// * helmet
app.use(helmet());
// * json parser
app.use('/api/v1', express.json());
// * views
const viewsPath = path.join(process.cwd(), 'dist', 'views');
app.set('views', viewsPath);
app.set('view engine', 'ejs');
// * public assets
const publicAssetsPath = path.join(process.cwd(), 'dist', 'public');
app.use('/', express.static(publicAssetsPath));
// * version one api routes
app.use('/api/v1/user', userRouter);
app.use(errorHandler);
// *
app.get('/test', (req, res) => {
 res.render('index', { people: ['hamidreza', 'amir'] });
});
// * io connections
io.on('connection', (socket: any) => {
 console.log('a user connected');
 io.emit('chat', { msg: 'hi my brother' });
 socket.on('respond', () => {
  console.log('respond from client');
 });
});
// * running
const port = 5000;
httpServer.listen(port, () => {
 console.log(`server is running on port:${port}`);
});
