<template>
    <button 
        @click="$emit('clicked')" 
        class="
        text-white font-bold
        py-4 rounded-lg
        text-lg focus:outline-none"
        > {{ text }} </button>
</template>

<script>
export default {
    name: "ButtonPrimary",
    props: ['text']
}
</script>

<style scoped>
    button {
        background: var(--color-primary-2);
        width: 150px;   
    }
</style>