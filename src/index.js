import http     from 'http';
import app from './app.js';
import config from './env';
import mainConfig from './env';

// listen on port
const server = http.createServer(app).listen(config.PORT, () => {
  if (mainConfig.NODE_ENV !== 'test') console.log('Server started on port ' + config.PORT + ` in ${config.NODE_ENV} mode`);
});

export default server;