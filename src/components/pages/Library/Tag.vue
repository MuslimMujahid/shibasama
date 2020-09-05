<template>
    <button class="
        focus:outline-none 
        text-gray-600 text-lg 
        font-bold uppercase 
        flex items-center mb-5">
        {{ topic }} 
        <div class="
            count ml-2 
            text-white
            text-sm flex items-center px-3 h-4"> 
            {{ count }} 
        </div>
    </button>
</template>

<script>
export default {
    name: "Tag",
    props: ['topic', 'count', 'active']    
}
</script>

<style scoped>

    .count {
        background: #7E75A3;
        border-radius: 12px;
        color: var(--color-primary-3);
    }

    .active {
        color: #A9A3C2;
    }

    .active > div {
        background: var(--color-primary-2);
        color: white;
    }

</style>