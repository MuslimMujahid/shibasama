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
                <div>
                    <p class="color-greyscale-5"> Summer, 2020 </p>
                    <p class="color-primary-1"> 8.8 </p>
                </div>
                <input type="checkbox" class="w-4 h-4">
            </div>

            <div class="buttons hidden">
                <CircleButtonMinus class="card-button mr-12"/>
                <CircleButtonPlus class="card-button"/>
            </div>
            
            <div class="flex justify-between items-center">
                <div>
                    <p class="title text-white text-xl -mb-1"> Anime Title </p>
                    <p class="episode text-gray-400"> Episode 10 of 24 </p>
                </div>
                <MoreButton class="MoreButton card-button hidden"/>
            </div>
        </div>
        <div class="borderBottom"></div>
    </div>    
</template>

<script>
import CircleButtonPlus from '@/assets/icons/CircleButtonPlus.svg'
import CircleButtonMinus from '@/assets/icons/CircleButtonMinus.svg'
import MoreButton from '@/assets/icons/MoreButton.svg' 

export default {
    name: "Card",
    components: {
        CircleButtonPlus,
        CircleButtonMinus,
        MoreButton
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

    .card:hover .MoreButton {
        display: block;
    }

    .card:hover .detail .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .card:hover .detail .buttons {
        display: flex;
        justify-content: center;
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