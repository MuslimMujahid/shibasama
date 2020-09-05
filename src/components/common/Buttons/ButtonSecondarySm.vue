<template>
    <button 
        @click="$emit('clicked')" 
        class="
        text-white font-bold
        py-2 rounded-lg
        text-lg focus:outline-none"
        > {{ text }} </button>
</template>

<script>
export default {
    name: "ButtonPrimarySm",
    props: ['text']
}
</script>

<style scoped>
    button {
        background: var(--color-primary-2);
        width: 140px;   
    }
</style>