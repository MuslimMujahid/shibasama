<template>
    <div class="absolute shadow-2xl flex flex-col z-20">
        <HomeIcon class="icon text-red-900"/>
        <WatchListIcon class="icon"/>
        <LibraryIcon class="icon"/>
        <SeasonIcon class="icon"/>
        <NewsIcon class="icon"/>
    </div>     
</template>

<script>
import HomeIcon from '../assets/icons/HomeIcon.svg'
import LibraryIcon from '../assets/icons/LibraryIcon.svg'
import NewsIcon from '../assets/icons/NewsIcon.svg'
import SeasonIcon from '../assets/icons/SeasonIcon.svg'
import WatchListIcon from '../assets/icons/WatchListIcon.svg'

export default {
    name: "Sidebar",
    components: {
        HomeIcon,
        LibraryIcon,
        NewsIcon,
        SeasonIcon,
        WatchListIcon
    }
}
</script>

<style scoped>

    div {
        top: 250px;
        left: 32px;
        border-radius: 20px;
        overflow: hidden;
    }

    .icon {
        padding: 20px;
        width: 20px;
        box-sizing: content-box;
        color: red;
        background: var(--color-greyscale-2);
        border-bottom: solid 1px var(--color-primary-3);
    }

    .icon:hover {
        cursor: pointer;
        background: var(--color-greyscale-1);
    }
</style>