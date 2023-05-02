<template>
    <div>
        <div v-if="submitMessage" class="submit-message" :class="{ 'success': success, 'error': !success }">
            {{ submitMessage }}
        </div>
        <div class="kajut-buttons">
            <div class="kajut-button kajut-red" @click="handleAnswer(0)">
                <div class="kajut-button-number">1</div>
                <div class="kajut-button-text">Red</div>
            </div>
            <div class="kajut-button kajut-blue" @click="handleAnswer(1)">
                <div class="kajut-button-number">2</div>
                <div class="kajut-button-text">Blue</div>
            </div>
            <div class="kajut-button kajut-green" @click="handleAnswer(2)">
                <div class="kajut-button-number">3</div>
                <div class="kajut-button-text">Green</div>
            </div>
            <div class="kajut-button kajut-yellow" @click="handleAnswer(3)">
                <div class="kajut-button-number">4</div>
                <div class="kajut-button-text">Yellow</div>
            </div>
        </div>
    </div>
</template>
  
<style>
.kajut-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.kajut-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 300px;
    cursor: pointer;
    border-radius: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}

.kajut-button:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}

.kajut-red {
    background-color: #e53935;
}

.kajut-blue {
    background-color: #2979ff;
}

.kajut-green {
    background-color: #43a047;
}

.kajut-yellow {
    background-color: #ffb300;
}

.kajut-button-number {
    font-size: 5em;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.kajut-button-text {
    font-size: 3em;
    font-weight: bold;
    color: white;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}

.submit-message {
    padding: 20px;
    text-align: center;
    font-weight: bold;
}

.success {
    background-color: #43a047;
    color: white;
}

.error {
    background-color: #e53935;
    color: white;
}
</style>
  
<script>
import axios from 'axios'

export default {
    name: 'QuestionView',

    data() {
        return {
            game: '',
            uuidp: '',
            alias: '',
            answer: '',
            error: '',
            success: false,
            submitMessage: ''
        }
    },

    methods: {
        handleAnswer(guess) {
            this.alias = this.$store.state.alias;
            this.answer = guess;
            this.game = this.$store.state.gameId;
            this.uuidp = this.$store.state.uuidP;

            axios.post('/api/guess/', {
                game: this.game,
                answer: this.answer,
                uuidp: this.uuidp
            },
                {
                    withCredentials: false
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(response => {
                    console.log('Answer submitted:', response.data);
                    this.submitMessage = 'Answer submitted successfully!';
                    this.success = true;
                }).catch(error => {
                    console.error('Error submitting answer:', error.response.data);
                    // get the error message from the data in the response
                    this.submitMessage = error.response.data.detail;
            this.success = false;
        })
    }
}
}
</script>




  