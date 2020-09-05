<template>
    <div class="hero relative rounded-lg">
        <img 
            src="@/assets/images/Hero1.png" 
            class="object-contain">
        <div class="darkLayer rounded-lg"></div>
        <div class="
            info absolute 
            top-0 h-full 
            flex flex-col 
            justify-center ml-12"
            >
            <p class="text-white lg:text-5xl text-3xl font-bold"> Watching anime at ease. </p>
            <p class="text-gray-200 lg:text-lg text-sm font-semibold mb-4">
                Now you can watch anime without worrying 
                about where episode you left off. We provide 
                your anime needs to make your watching 
                journey more fun than ever. 
            </p>
            <ButtonPrimary text="Add Anime" />
        </div>
    </div>    
</template>

<script>
import ButtonPrimary from '@/components/common/Buttons/ButtonPrimary'

export default {
    name: "Hero",
    components: {
        ButtonPrimary
    }
}
</script>

<style scoped>

    .hero {
        box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);
    }

    .darkLayer {
        background: linear-gradient(45deg, rgba(38,30,72,1) 10%,rgba(38,30,72,0.83) 25%,rgba(0,0,0,0) 100%);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
    }

    .info {
        max-width: 600px;
    }
</style>