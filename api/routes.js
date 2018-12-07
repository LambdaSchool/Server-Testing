// WEB API GLOBAL ROUTES
// ==============================================
const goftRouter = require('./gameofthrones/goftRoutes');

module.exports = app => {
  app.get('/', (_, res) => res.status(200).json({ you: 'up?' }));
  app.use('/api', goftRouter);
};
