<template>
  <div>
    <h1 class="h1">Usuarios Nuevos</h1>
    <UserFormView />
    <UserListView />
  </div>
</template>

<script>
import UserFormView from "./components/UserFormView.vue";
import UserListView from "./components/UserListView.vue";

export default {
  components: {
    UserFormView,
    UserListView,
  },
};
</script>

<style scooped>

.h1 {
  text-align: center;
}
</style>
