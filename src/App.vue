<template>
  <main>
    <top-menu/>

    <div class="container center-content">
      <router-view />
    </div>
  </main>
</template>

<script>
import TopMenu from 'components/TopMenu';

export default {
  components: {
    TopMenu
  }
};

</script>
