const ROUTES = {
  index: { path: '/' },
  account: {
    path: 'account',
    login: {path: 'login'},
    settings: { path: 'settings' },
    orders: { path: 'orders' },
  },
  expertAccount: {
    path: 'expert-account',
    settings: { path: 'settings' },
    orders: { path: 'orders' },
  },
};

export default ROUTES;
