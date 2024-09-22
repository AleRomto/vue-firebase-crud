<template>
  <div class="user-list">
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="user-item">
        <p>{{ user.name }} - {{ user.email }}</p>
        <button class="delete-button" @click="deleteUser(user.id)">
          Eliminar
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["users"]),
  },
  methods: {
    ...mapActions(["fetchUsers", "deleteUser"]),
  },
  async created() {
    await this.fetchUsers();
  },
};
</script>

<style scooped>
.user-list {
  max-width: 600px;
  margin: 20px auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.user-list h2 {
  text-align: center;
  padding: 15px;
  background-color: #f5f5f5;
  color: #333;
  margin: 0;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #eee;
}

.user-item:last-child {
  border-bottom: none;
}

.user-item p {
  margin: 0;
  color: #555;
}

.delete-button {
  background-color: #ff4d4d;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover {
  background-color: #ff1a1a;
}
</style>
