<template>
    <div class="inline-flex items-center">
        <input 
            type="text" 
            id="search" 
            placeholder="Search ..."
            class="bg-transparent 
                    text-lg py-1 
                    text-gray-600
                    font-semibold
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

    input {
        min-width: 250px;
    }
</style>