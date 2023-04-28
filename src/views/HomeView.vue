<template>
  <div>
    <div class="container mt-3">
      <h1>Join Kahoot Game</h1>
      <form @submit.prevent="joinGame">
        <div class="form-group">
          <label for="alias">Alias:</label>
          <input type="text" class="form-control" id="alias" v-model="alias" required>
        </div>
        <div class="form-group">
          <label for="gameId">Game ID:</label>
          <input type="number" class="form-control" id="gameId" v-model="gameId" required>
        </div>
        <button type="submit" class="btn btn-primary">Join Game</button>
      </form>
      <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      alias: '',
      gameId: '',
      error: '',
    };
  },

  methods: {
    joinGame() {
      axios.post('http://127.0.0.1:8000/api/participant/', {
        game: this.gameId,
        alias: this.alias,
        uuidp: this.uuidP
      }).then(response => {
        console.log(response);
        this.$store.commit('setAlias', this.alias);
        this.$store.commit('setGameID', this.gameId);
        this.$store.commit('setUuidP', response.data.uuidP);
        this.error = null;
        this.$router.push('/wait');
      }).catch(error => {
        console.log(error);
        this.error = error.response.data.error;
      });
      this.oldGameId = this.gameId;
    }
  }

}
</script>
