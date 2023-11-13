
<template>
    <header>
        <nav>
            <img src="../assets/dashnote-logo.png" alt="logo" style="height: 3rem; aspect-ratio: 1/1;">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Releases</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComp'
}
</script>

<style>
header {
    padding: 1rem;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin-right: 2rem;
}

nav a {
    color: #1F538D;
    text-decoration: underline;
}

nav{
    display: flex;
    justify-content:space-between;
    align-items: center;
}
</style>
