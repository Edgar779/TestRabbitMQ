import * as path from 'path';

const config = {
  NODE_ENV: 'development',
  PORT: 3002,
  // BASE_URL: 'http://10.10.1.64:2020/',
  // BASE_IMG_URL: 'http://10.10.1.64:2020/image/',
  MONGO_URL: "mongodb://Edgar778:lenta123456789@ds121299.mlab.com:21299/lot2",
  // MONGO_URL: "mongodb://<dbuser>:<dbpassword>@ds261521.mlab.com:61521/user"
  // MONGO_URL: "mongodb://localhost:27017/Natali",
  JWT_SECRET: 's%4^3paraSA5Ddox8A$D!#',
  // Bcrypt_Admin: "",
  // MEDIA_PATH: path.resolve(__dirname, '..', '..', '/media'),
};

export default config;