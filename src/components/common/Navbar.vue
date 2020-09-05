<template>
    <div class="
        flex items-center 
        justify-between 
        py-4">
        <img 
            src="@/assets/images/Long-Logo-Dark.png"
            class="h-10">
        <SearchBar class="SearchBar border-gray-500"/>
        <SettingIcon />    
    </div>    
</template>

<script>
import SettingIcon from '@/assets/icons/SettingIcon.svg'
import SearchBar from '@/components/common/SearchBar'

export default {
    name: "Navbar",
    components: {
        SettingIcon,
        SearchBar
    }
}
</script>

<style scoped>

    img {
        width: 185px;
        height: 50px;
    }

    .SearchBar {
        border-bottom-width: 1px;
    }
</style>