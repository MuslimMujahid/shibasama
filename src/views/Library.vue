<template>
    <div class="wrapper relative mt-8"> 
        <!-- <AddAnimeModal class="left-0 right-0 mx-auto z-40" /> -->
        <History closeHistory="toggleHistory" :class="{'hidden': !showHistory}" v-on:close-history="toggleHistory"
            class="absolute left-0 right-0 mx-auto z-40"/>
        <div class="buttons flex justify-between w-full">
            <div>
                <ButtonSecondary text="Add" class="mr-5"/>
                <ButtonSecondary text="Refresh" />
            </div>
            <ButtonPrimary text="History" v-on:clicked="toggleHistory" class="self-end" />
        </div>
        <List class="mt-5" />
        <TagBar />
        <!-- <div 
            class="darkLayer  
                bg-black opacity-25 
                fixed w-screen 
                h-screen left-0 top-0 z-20">
            
        </div> -->
    </div>
</template>

<script>
import ButtonPrimary from '@/components/common/Buttons/ButtonPrimary'
import ButtonSecondary from '@/components/common/Buttons/ButtonSecondary'
import TagBar from '@/components/pages/Library/TagBar'
import List from '@/components/pages/Library/List'
import History from '@/components/pages/Library/History/History'
// import AddAnimeModal from '../components/Modals/AddAnime'

export default {
    name: 'Library',
    components: {
        ButtonPrimary,
        ButtonSecondary,
        TagBar,
        List,
        History
        // AddAnimeModal
    },
    data() {
        return {
            showHistory: false,
            showAddAnime: false
        }
    },
    methods: {
        toggleHistory() {
            this.showHistory = !this.showHistory
        }
    }
}
</script>

<style scoped>

    .wrapper {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto 1fr;
        
    }

    .List {
        grid-row: 2/3;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3vw;
    } 

    .TagBar {
        grid-row: 1/3;
        right: 15vw;
    }
</style>