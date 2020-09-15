<template>
    <div class="sidebar flex flex-col z-20">
        <router-link to='/'>
            <HomeIcon class="icon"/>
        </router-link>
        <router-link to='/watchlist'>
            <WatchListIcon class="icon"/>
        </router-link>
        <router-link to='/library'>
            <LibraryIcon class="icon"/>
        </router-link>
        <SeasonIcon class="icon"/>
        <NewsIcon class="icon"/>
    </div>     
</template>

<script>
import HomeIcon from '@/assets/icons/HomeIcon.svg'
import LibraryIcon from '@/assets/icons/LibraryIcon.svg'
import NewsIcon from '@/assets/icons/NewsIcon.svg'
import SeasonIcon from '@/assets/icons/SeasonIcon.svg'
import WatchListIcon from '@/assets/icons/WatchListIcon.svg'

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

    .sidebar {
        box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.75);
    }

    div {
        border-radius: 20px;
        overflow: hidden;
        display: inline-block;
    }

    .icon {
        padding: 20px;
        width: 20px;
        box-sizing: content-box;
        background: var(--color-greyscale-2);
        border-bottom: solid 1px var(--color-primary-3);
    }

    .icon:hover {
        cursor: pointer;
        background: var(--color-greyscale-1);
    }
</style>