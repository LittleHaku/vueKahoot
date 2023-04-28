<template>
    <div>
        <div class="container mt-3">
            <h1>Waiting for Game to Start</h1>
            <p v-if="gameStatus === 'WAITING'">Waiting for the game to start...</p>
            <p v-if="gameStatus === 'QUESTION'">The game has started! Proceeding to the next page...</p>
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
            gameStatus: 'WAITING',
            errorMsg: '',
        };
    },
    mounted() {
        this.checkGameStatus();
    },
    methods: {
        checkGameStatus() {
            setInterval(() => {
                axios.get(`http://127.0.0.1:8000/api/games/${this.$store.state.gameId}/`)
                    .then(response => {
                        this.gameStatus = response.data.status;
                        if (this.gameStatus === 'QUESTION') {
                            this.$router.push('/question');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.errorMsg = error.response.data.error;
                    });
            }, 2000);
        },
    }
}
</script>
  