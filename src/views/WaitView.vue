<template>
    <div>
        <div class="container mt-3">
            <h1>Waiting for Game to Start</h1>
            <p>Waiting for the game to start...</p>
            <p v-if="errorMsg" class="text-danger mt-3">{{ errorMsg }}</p>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    name: 'Wait',
    data() {
        return {
            errorMsg: '',
        };
    },
    mounted() {
        this.checkGameStatus();
    },
    methods: {
        checkGameStatus() {
            setInterval(() => {
                axios.get(`/api/games/${this.$store.state.gameId}/`)
                    .then(response => {
                        console.log("response: ");
                        console.log(response);
                        console.log("response.data: ");
                        console.log(response.data);
                        console.log("response.data.state: ");
                        console.log(response.data.state);

                        if (response.data.state === 2) {
                            console.log("Game is starting");
                            this.$store.commit('setState', response.data.state);

                            this.$router.push('/question');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.$store.commit('setError', error.response.data.error);
                    });
            }, 2000);
        },
    },
};
</script>
  