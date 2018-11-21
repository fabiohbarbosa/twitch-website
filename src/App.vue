<template>
  <main>
    <top-menu/>
    <div id="container">
      <router-view />
    </div>
    <footer-app/>
  </main>
</template>

<script>
import TopMenu from 'components/TopMenu';
import FooterApp from 'components/FooterApp';

export default {
  components: {
    TopMenu,
    FooterApp
  }
};

</script>
