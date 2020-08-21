<template>
    <div class="inline-flex items-center border-0 border-b-1">
        <input 
            type="text" 
            id="search" 
            placeholder="Search ..."
            class="bg-transparent 
                    text-lg px-2 py-1 
                    text-gray-600
                    focus:outline-none">
        <label for="search">
            <SearchIcon />
        </label>
    </div>
</template>
<script>
import SearchIcon from '../assets/icons/SearchIcon.svg'

export default {
    name: "SearchBar",
    components: {
        SearchIcon
    }
}
</script>

<style scoped>

</style>