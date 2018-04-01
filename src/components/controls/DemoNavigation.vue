<template>
  <div class="navigation">
    <router-link v-for="link in links"
                 :key="link.index"
                 :to="link.path"
                 :class="'navigation__link'"
    >
      {{ link.name }}
    </router-link>
  </div>
</template>

<script>
  import { routes } from '../../router';

  const getLinks = routesConfig => routesConfig.map((route, index) => ({
    index,
    name: route.name,
    path: route.path
  }));

  export default {
    name: 'DemoNavigation',
    data() {
      return {
        links: getLinks(routes)
      };
    }
  };
</script>

<style scoped>

</style>
