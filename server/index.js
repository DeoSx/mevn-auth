import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import config from './config/index';
import webpackConfig from '../webpack.config';

import router from './routes/index';

const app = express();
const compiler = webpack(webpackConfig);

app.use(router);
app.use(webpackDevMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

mongoose.connect(config.dataBaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log('Server has been started on port 3000...');
});
