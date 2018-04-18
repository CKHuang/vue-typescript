<template>
    <div>
        Hello {{ name }}
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    export default class App extends Vue {

        private name : string = "";

        mounted() {
            this.geet();
        }

        geet() {
            this.name = "App"
        }
    }
</script>
