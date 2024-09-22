import { createStore } from 'vuex';
import { db } from './firebase';
import { doc } from 'firebase/firestore';
import { collection, addDoc, deleteDoc, getDocs } from 'firebase/firestore';

const store = createStore({
  state() {
    return {
      users: []
    };
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
    REMOVE_USER(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      commit('SET_USERS', users);
    },
    async addUser({ commit }, user) {
      const docRef = await addDoc(collection(db, 'users'), user);
      commit('ADD_USER', { id: docRef.id, ...user });
    },
    async deleteUser({ commit }, userId) {
      await deleteDoc(doc(db, 'users', userId));
      commit('REMOVE_USER', userId);
    }
  }
});

export default store;
