const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');
const AdminBroMongoose = require('@admin-bro/mongoose');

const Company = require('../models/companyModel');

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  resources: [Company],
  rootPath: '/admin',
  branding: {
    companyName: 'Tickets4Travel',
    softwareBrothers: false
  },
  dashboard: {
    component: AdminBro.bundle('../views/my-dashboard-component.jsx')
  }
});

const ADMIN = {
  email: 'test@example.com',
  password: 'password'
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: 'adminbro',
  cookiePassword: 'somePassword'
});

module.exports = router;
