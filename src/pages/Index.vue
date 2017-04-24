<template lang="jade">
#index-view.view
  h1 GRAPE
  p A Vue.js 2.0 UI Toolkit for Web
  p
    img(alt='logo', src='http://ohusmobs2.bkt.clouddn.com/20170424149301860250974.png')
  h2 Docs
  p
    a(href='https://github.com/geekpark/grape/tree/master/src/components/login/README.md') Login
  h2 Install
  p
    code
      | npm install gpk-grape -S
  h2 Usage
  p
    code
      | import {Login} from &apos;gpk-grape&apos;
      br
      | Vue.use(Login)
  h2 Build
  p
    code
    | ` bash
  h1 install deps
  p yarn install
  p npm run dev
  h1 build
  p
    | npm run prod
</template>

<script>
export default {
  name: 'index-view',
}
</script>

<style lang="stylus">
#index-view
  text-align left

  img
    width 200px
</style>
