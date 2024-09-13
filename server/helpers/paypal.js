const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AchVGKDYdd1u2La0U4UDipFqHfRYOL-drsWBc9LJfbeR8rPhrnVF4DCoIF5ekALSc9rfsctGve7kqxWL",
  client_secret:"ENCVCb1budhdb7J0VvHjWCWTEI7cTab908iYMStvtP1fG_rOgYDJPF-lR8YwSZIA1NI46RkaJ9OqOq_I",
});

module.exports = paypal;
