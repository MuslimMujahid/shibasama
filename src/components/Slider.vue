<template>
    <div class="">
        <header class="flex justify-between h-24 items-center mt-8">
            <h1 class="text-white text-4xl font-bold"> {{ topic }} </h1>
            <button class="flex items-center text-lg font-bold focus:outline-none">
                See more
                <RightArrowIcon class="ml-2" />    
            </button>
        </header>

        <div class="flex shadow-2xl">
            <CardA 
                v-for="item in list" 
                :key="item.id" 
                v-bind:item="item"/>
        </div>
    </div>    
</template>

<script>
import CardA from './CardA'
import RightArrowIcon from '../assets/icons/RightArrow.svg'

export default {
    name: "Slider",    
    props: ['topic', 'list'],
    components: {
        CardA,
        RightArrowIcon
    }
}
</script>

<style scoped>

    button {
        color: var(--color-accent-pink);
    }
</style>