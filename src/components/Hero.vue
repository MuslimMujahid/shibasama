<template>
    <div class="relative rounded-lg shadow-2xl">
        <img 
            src="../assets/images/Hero1.png" 
            class="object-contain">
        <div class="blend"></div>
        <div class="
            info absolute 
            top-0 h-full 
            flex flex-col 
            justify-center ml-12"
            >
            <p class="text-white text-5xl font-bold"> Watching anime at ease. </p>
            <p class="text-gray-200 mb-2">
                Now you can watch anime without worrying 
                about where episode you left off. We provide 
                your anime needs to make your watching 
                journey more fun than ever. 
            </p>
            <button class="text-white font-bold w-40 py-3 rounded-lg"> Add Anime </button>
        </div>
    </div>    
</template>

<script>
export default {
    name: "Hero"
}
</script>

<style scoped>
    .blend {
        background: linear-gradient(45deg, rgba(38,30,72,1) 10%,rgba(38,30,72,0.83) 25%,rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    .info {
        max-width: 520px;
    }

    button {
        background: var(--color-primary-1);
    }
</style>