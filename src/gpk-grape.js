import Login from './components/login'


const install = function(Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return;

  Vue.component(Login.name, Login);
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.1',
  install,
  Login
}
