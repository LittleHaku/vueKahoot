<template>
  <div>
    <div class="container mt-3">
      <h1>Join Kahoot Game</h1>
      <form @submit.prevent="joinGame">
        <div class="form-group">
          <label for="alias">Alias:</label>
          <input
            type="text"
            class="form-control"
            id="alias"
            v-model="alias"
            required
          />
        </div>
        <div class="form-group">
          <label for="gameId">Game ID:</label>
          <input
            type="number"
            class="form-control"
            id="gameId"
            v-model="gameId"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btn-p">Join Game</button>
      </form>
      <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </div>
  </div>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="number"] {
  border: 2px solid #ddd;
  border-radius: 4px;
  box-shadow: none;
  padding: 10px;
  margin-bottom: 10px;
}

.form-group input[type="text"]:focus,
.form-group input[type="number"]:focus {
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
import axios from "axios";

export default {
  name: "HomeView",

  data() {
    return {
      alias: "",
      gameId: "",
      error: "",
    };
  },

  methods: {
    joinGame() {
      this.$store.commit("setAlias", this.alias);
      this.$store.commit("setGameID", this.gameId);

      axios
        .post(
          "/api/participant/",
          {
            game: this.gameId,
            alias: this.alias,
            uuidP: this.uuidP,
          },
          {
            withCredentials: false,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((response) => {
          this.$store.commit("setUuidP", response.data.uuidP);
          this.error = null;
          this.$router.push("/wait");
        })
        .catch((error) => {
          console.log(error);
          this.error = error.response.data.error;
        });

      this.oldGameId = this.gameId;
    },
  },
};
</script>
