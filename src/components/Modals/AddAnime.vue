<template>
    <div class="modal">
        <header class="flex justify-center pt-4">
            <p class="text-white text-xl font-bold"> Add  Anime from Your Internal Storage </p>
        </header>
        <form class="py-5 flex px-8">
            <div class="Input flex items-center mr-6 px-2">
                <input 
                    class="w-full mr-2 focus:outline-none bg-transparent text-white" 
                    placeholder="Search anime ...">
                <SearchIcon />
            </div>
            <ButtonSecondarySm text="Search dir" />
        </form>
        <div class="image pl-8">
            <img 
                width="200" height="266"
                src="@/assets/images/Image.jpg" 
                alt=""
                class="object-contain">
        </div>
        <div class="info ml-4 pr-8">
            <p class="text-xl text-white font-bold"> Boku no Hero Academia Season 1 </p>
            <p class="text-lg text-gray-400 mb-4"> 24 Episodes </p>
            <p class="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <footer class="flex justify-end mt-4 px-8 py-4">
            <ButtonPrimarySm text="Cancel" class="CancelButton mr-2" />
            <ButtonPrimarySm text="Save" class="SaveButton" />
        </footer>
    </div>    
</template>

<script>
import ButtonSecondarySm from '@/components/common/Buttons/ButtonSecondarySm'
import ButtonPrimarySm from '@/components/common/Buttons/ButtonPrimarySm'
import SearchIcon from '@/assets/icons/SearchIcon.svg'

export default {
    name: 'AddAnime',
    components: {
        ButtonSecondarySm,
        ButtonPrimarySm,
        SearchIcon
    }
}
</script>

<style scoped>

    .modal {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: repeat(4, auto);
        width: 640px;
        border-radius: 24px;
        background: var(--color-greyscale-2);
    }

    header, form, footer {
        grid-column: span 2;
    }

    .Input {
        width: 72%;
        border: solid 1px #fff;
        border-radius: 12px; 
    }

    .CancelButton, .SaveButton {
        width: 100px;
    }

    .CancelButton {
        background: transparent;
        color: var(--color-accent-pink);
    }

    footer {
        border-top: solid 1px #fff;
    }
</style>   