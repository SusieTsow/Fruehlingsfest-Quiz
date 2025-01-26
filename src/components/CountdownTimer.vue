<template>
    <div class="countdown__timer">
        <p v-if="timeLeft > 0" class="timeleft">
            <img
                class="timer__icon"
                :src="require('@/assets/timer.png')" 
                alt="Eine Uhr, die die verbleibende Zeit anzeigt"
            >
            <span class="timer__container">{{ formattedTime }}</span></p>
        <p v-else class="timeup">Time's up!</p>
    </div>       
</template>

<script>
    export default {
        name: 'CountdownTimer',
        props: {
            duration: {
                type: Number,
                required: true,
                default: 180,
            },
        },
        data() {
            return {
                timeLeft: this.duration,
                timer: null,
            };
        },
        computed: {
            formattedTime() {
                const minutes = Math.floor(this.timeLeft / 60);
                const seconds = this.timeLeft % 60;
                return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
        },
        methods: {
            startCountdown() {
                this.timer = setInterval(() => {
                    if (this.timeLeft > 0) {
                        this.timeLeft--;
                    } else {
                        clearInterval(this.timer);
                        this.$emit('timer-end');
                    }
                }, 1000);
            },
        },
        mounted() {
            this.startCountdown();
        },
        beforeUnmount() {
            clearInterval(this.timer);
        },
    };
</script>
<style>
.countdown__timer {
    font-size: 1.5rem;
    font-weight: 700;
}
.timer__container {
    font-size: 1.5rem;
    font-weight: 700;
    color: #EC4C3E;
}
.timeleft {
    display: flex;
    align-items: center;
}
.timeup {
    color: #EC4C3E;
    font-weight: 700;
}
.timer__icon {
    width: 1.75rem;
    height: 1.75rem;
    margin-inline-end: 0.5rem;
}
</style>