<template>
    <div class="card relative flex-shrink-0">
        <img 
            :src="item.attributes.posterImage.medium"
            class="object-cover flex-shrink-0"
            >
        <div class="
            info absolute
            flex flex-col 
            justify-center
            bottom-0
            w-full px-4 z-10">
            <p class="title text-white text-2xl font-bold"> {{ item.attributes.canonicalTitle }} </p>
            <p class="episode text-lg text-gray-400 font-bold"> Episode 1 </p>
        </div>
        <div class="rating font-bold absolute text-xl z-10"> {{ item.attributes.averageRating }} </div>
        <div class="darkLayer"></div>
    </div>    
</template>

<script>

export default {
    name: "CardA",
    props: ['item'],
}
</script>

<style scoped>

    .card, img {
        width: 320px !important;
        height: 200px !important;
    }

    .card:hover .darkLayer {
        cursor: pointer;
        opacity: 0.6;
    }

    .rating {
        color: var(--color-primary-1);
        top: 12px;
        right: 12px;
    }

    .darkLayer {
        background: #000;
        opacity: 0.2;
        position: absolute;
        width: 320px;
        height: 200px;
        top: 0;
    }
</style>