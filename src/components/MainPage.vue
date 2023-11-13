<template>
    <article class="sections">
        <section class="front">
            <div class="main">
                <div class="main-content">
                    <img src="../assets/dashnote.png" alt="Dashnote Preview">
                    <div class="section">
                        <h1>Welcome to DashNote</h1>
                        <p>
                            DashNote is a Python note-taking app designed to simplify your
                            note-taking experience.
                        </p>
                    </div>
                </div>
            </div>
            <div class="bg">
                <ParticlesBg type="lines" num="100" />
            </div>
        </section>
        <section class="second">
            <div class="main-content">
                <div class="section2">
                    <div class="feat">
                        <h1>Features:</h1>
                        <p>DashNote is a simple note-taking application built using customtkinter.
                            It allows you to create, save, and update notes with a user-friendly interface.</p>
                        <ul>
                            <li>Dark theme for comfortable usage.</li>
                            <li>Create new notes with a specified name.</li>
                            <li>Save notes with automatic storage in a "saved-notes" folder.</li>
                            <li>Update existing notes with ease.</li>
                            <li>Left panel displays the history of saved notes.</li>
                        </ul>
                    </div>
                    <div class="lottie">
                        <Vue3Lottie :animationData="animationData" height="40vh"/>
                    </div>
                </div>
            </div>
        </section>
    </article>
</template>

<script>
import { ParticlesBg } from 'particles-bg-vue';
import { Vue3Lottie } from 'vue3-lottie';
import animationData from '../assets/animation.json';

export default {
    name: 'MainPage',
    components: {
        ParticlesBg,
        Vue3Lottie,
    },
    data() {
        return {
            animationData
        };
    },
};

</script>

<style scoped>
.sections {
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
}

.sections section {
    scroll-snap-align: start;
}

.main {
    width: auto;
    overflow: hidden;
}

.main-content {
    margin: 0 auto;
    width: 80vw;
    height: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: larger;
    z-index: 2;
}

.main-content img{
    height: 20rem;
    margin-right: 5rem;
    border-radius: 0.2rem;
}

.bg {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    filter: blur(0.2rem) brightness(0.5);
}

.section {
    width: 30vw;
    margin-bottom: 40px;
}

.main-content img {
    height: 20rem;
    aspect-ratio: 16/9;
    margin-right: 5rem;
    border-radius: 0.2rem;
}

.front {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

.second {
    height: 100vh;
    width: 100%;
    color: #1F538D;
    background: none;
}

.section2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70vw;
}

.feat {
    display: flex;
    flex-direction: column;
    text-align: justify;
    align-items: left;
    width: 30vw;
}

.feat ul {
    width: 30vw;
    text-align: left;
}

.feat ul {
    margin-bottom: 1rem;
    margin: 0 1rem;
    padding: 0 0.2rem;
    list-style:square;
    font-style: italic;
}

.feat li {
    margin-bottom: 1rem;
}
</style>
