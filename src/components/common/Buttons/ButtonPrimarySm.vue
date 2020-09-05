<template>
    <button 
        @click="$emit('clicked')" 
        class="
        text-white font-bold
        rounded-lg py-2 text-lg
        focus:outline-none"
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
        background: var(--color-primary-1);
        width: 140px;   
    }
</style>