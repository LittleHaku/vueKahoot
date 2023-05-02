<template>
  <div>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h1 class="text-center mb-4">Join Kahoot Game</h1>
          <form @submit.prevent="joinGame">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="alias">Alias:</label>
                  <input type="text" class="form-control" id="alias" v-model="alias" required>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="gameId">Game ID:</label>
                  <input type="number" class="form-control" id="gameId" v-model="gameId" required>
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-4">Join Game</button>
          </form>
          <p v-if="error" class="text-danger mt-3">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
form {
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

label {
  font-weight: 600;
}

input[type="text"],
input[type="number"] {
  border: 2px solid #ddd;
  border-radius: 4px;
  box-shadow: none;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border: 2px solid #007bff;
  box-shadow: none;
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0069d9;
  border: none;
}

.text-danger {
  font-size: 14px;
  font-weight: 600;
}
</style>

<script>
import axios from 'axios';

export default {
  name: 'JoinGameView',

  data() {
    return {
      alias: '',
      gameId: '',
      error: '',
    };
  },

  methods: {
    joinGame() {
      this.$store.commit('setAlias', this.alias);
      this.$store.commit('setGameID', this.gameId);

      const payload = {
        game: this.gameId,
        alias: this.alias,
        uuidP: this.uuidP,
      };

      axios.post('/api/participant/', payload, {
        withCredentials: false,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }).then(response => {
        this.$store.commit('setUuidP', response.data.uuidP);
        this.error = null;
        this.$router.push('/wait');
      }).catch(error => {
        console.log(error);
        this.error = error.response.data.error;
      });
    },
  },
};
</script>
