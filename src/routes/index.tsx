const ROUTES = {
  index: { path: '/' },
  account: {
    path: 'account',
    login: {path: 'login'},
    registration: {path: 'registration'},
    settings: { path: 'settings' },
    orders_history: { path: 'orders_history' },
  },
  expertAccount: {
    path: 'expert_account',
    settings: { path: 'settings' },
    orders_history: { path: 'orders_history' },
  },
};

export default ROUTES;
