<template>
    <section class="releases" ref="releasesSection">
        <div class="releases-container">
            <div class="release-cont">
                <h1>Latest Releases</h1>
                <div v-for="release in releases" :key="release.id" class="release-item">
                    <div class="release-info">
                        <h2>{{ release.name }}</h2>
                        <VueMarkdown class="text" :source="release.body" />
                    </div>
                </div>
            </div>
            <div class="download-icon">
                <Vue3Lottie :animationData="animationData" height="60vh" />
            </div>
        </div>
        <div class="bg">
            <ParticlesBg type="lines" num="100" />
        </div>
    </section>
</template>

<script>

import { ParticlesBg } from 'particles-bg-vue';
import { Vue3Lottie } from 'vue3-lottie';
import VueMarkdown from 'vue-markdown-render';
import animationData from '../assets/download.json';

export default {
    name: 'ReleasesPage',
    components: {
        ParticlesBg,
        VueMarkdown,
        Vue3Lottie
    },
    data() {
        return {
            releases: [], // Store releases fetched from GitHub
            animationData,
        };
    },
    mounted() {
        this.fetchReleases();
    },
    methods: {
        async fetchReleases() {
            try {
                // Fetch releases from GitHub API
                const response = await fetch('https://api.github.com/repos/Arwindpianist/Dashnote/releases');
                const releases = await response.json();

                // Update releases data
                this.releases = releases;
            } catch (error) {
                console.error('Error fetching releases:', error);
            }
        },
        downloadRelease(assets) {
            console.log('Downloading release:', assets);
            // TODO: Implement download logic

        },
        scrollToReleases() {
            this.$refs.releasesSection.scrollIntoView({ behavior: 'smooth' });
        },
        navigateToReleases() {
            this.$router.push({ name: 'releases' });
        },
        wrapInCodeBlock(text) {
            return '```\n' + text + '\n```';
        },
    },
};
</script>

<style scoped>
.releases {
    padding: 50px 0;
    scroll-snap-align: start;
}

.releases-container {
    display: flex;
    flex-direction: row;
    max-width: 800px;
    width: 60vw;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
}

h1 {
    color: #1F538D;
}

.release-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 20px;
    scroll-snap-align: start;
}

.release-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    text-align: justify;
    line-height: 2rem;
}

.release-info h2 {
    text-align: left;
}

h2 {
    color: #1F538D;
}

.text {
    margin-top: 10px;
    padding: 0;
    width: 30vw;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
}

.download-icon {
    cursor: pointer;
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
</style>
