const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Proxy yêu cầu bắt đầu với /api
    createProxyMiddleware({
      target: 'http://localhost:3001', // Backend của bạn chạy trên cổng 3001
      changeOrigin: true,
    })
  );
};
