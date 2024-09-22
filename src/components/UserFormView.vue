<template>
    <form @submit.prevent="submitUser">
      <input v-model="name" placeholder="Nombre" required />
      <input v-model="email" placeholder="Correo electrónico" required />
      <button type="submit">Agregar Usuario</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        name: '',
        email: ''
      };
    },
    methods: {
      ...mapActions(['addUser']),
      async submitUser() {
        await this.addUser({ name: this.name, email: this.email });
        this.name = '';
        this.email = '';
      }
    }
  };
  </script>
  

  <style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px; 
  margin: 20px auto; 
  padding: 20px; 
  border-radius: 8px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  background-color: #ffffff; 
}

input {
  padding: 10px;
  margin-bottom: 15px; 
  border: 1px solid #ccc; 
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s; 
}

input:focus {
  border-color: #007bff; 
  outline: none; 
}

button {
  padding: 10px;
  background-color: #007bff; 
  color: white; 
  border: none; 
  border-radius: 4px;
  font-size: 16px; 
  cursor: pointer; 
  transition: background-color 0.3s; 
}

button:hover {
  background-color: #0056b3; 
}
</style>