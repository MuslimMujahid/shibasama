<template>
    <div class="card relative flex-shrink-0 overflow-hidden">
        <img 
            src="@/assets/images/Image.jpg"
            class="object-cover flex-shrink-0"
            >
        <div class="
            detail absolute
            flex flex-col justify-between 
            bottom-0 mb-1
            w-full px-4 py-2 z-10
            bg-black bg-opacity-50">

            <div class="header hidden font-bold text-lg">
                <p class="color-greyscale-5"> Summer, 2020 </p>
                <p class="color-primary-1"> 8.8 </p>
            </div>

            <div class="buttons hidden">
                <PrevButton class="card-button"/>
                <PlayButton class="card-button"/>
                <NextButton class="card-button"/>
            </div>
            
            <div>
                <p class="title text-white text-xl -mb-1"> Anime Title </p>
                <p class="episode text-gray-400"> Episode 10 of 24 </p>
            </div>
        </div>
        <div class="borderBottom"></div>
    </div>    
</template>

<script>
import PlayButton from '@/assets/icons/PlayButton.svg'
import PrevButton from '@/assets/icons/PrevButton.svg'
import NextButton from '@/assets/icons/NextButton.svg'

export default {
    name: "Card",
    components: {
        PlayButton,
        PrevButton,
        NextButton
    }
}
</script>

<style scoped>

    .card, img {
        /* width: 18vw; */
        width: 240px;
        height: 336px;
    }

    .card {
        border-radius: 15px;
        box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);
    }

    .card:hover .detail {
        height: 100%;
    }

    .card:hover .detail .header {
        display: block;
    }

    .card:hover .detail .buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-button:hover {
        cursor: pointer;
    }

    .borderBottom {
        background-image: linear-gradient(to right, var(--color-primary-2) 50%, var(--color-primary-2) 50%, var(--color-accent-pink) 50%);
        position: absolute;
        width: 240px;
        height: 5px;
        top: 332px;
        z-index: 10;
    }

</style>