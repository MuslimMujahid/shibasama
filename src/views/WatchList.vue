<template>
    <div class="wrapper relative mt-8 justify-center"> 
        <div class="buttons flex justify-between w-full">
            <div class="flex">
                <ButtonSecondary text="Select All" class="mr-5"/>
                <ButtonSecondary text="Move to" />
                <div class="flex">
                    <PlanIcon />
                    <WatchingIcon />
                    <SeenIcon />
                    <OnholdIcon />
                    <DroppedIcon />
                </div>
            </div>
            <ButtonPrimary text="Import" v-on:clicked="toggleHistory" class="self-end" />
        </div>
        <List class="mt-5" />
        <WatchStatusBar class="ml-6 lg:ml-24 relative" :style="{'top': watchStatusBarTop + 'px'}"/>
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
import WatchStatusBar from '@/components/pages/WatchList/WatchStatusBar'
import List from '@/components/pages/WatchList/List'
import PlanIcon from '@/assets/icons/PlanIcon.svg'
import WatchingIcon from '@/assets/icons/WatchingIcon.svg'
import SeenIcon from '@/assets/icons/SeenIcon.svg'
import OnholdIcon from '@/assets/icons/OnholdIcon.svg'
import DroppedIcon from '@/assets/icons/DroppedIcon.svg'

export default {
    name: 'Library',
    components: {
        ButtonPrimary,
        ButtonSecondary,
        WatchStatusBar,
        List,
        PlanIcon,
        WatchingIcon,
        SeenIcon,
        OnholdIcon,
        DroppedIcon
    },
    data() {
        return {
            watchStatusBarTop: 0 
        }
    },
    created() {
        window.addEventListener('scroll', () => {
            this.watchStatusBarTop = window.scrollY
        })
    }
}
</script>

<style scoped>

    .wrapper {
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: auto 1fr;
        
    }

    .List {
        grid-row: 2/3;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    } 

    .WatchStatusBar {
        grid-row: 1/3;
    }

    @media only screen and (min-width: 968px) {
        .List {
            grid-template-columns: repeat(3, 1fr);
        } 
    }

    @media only screen and (min-width: 1280px) {
        .List {
            grid-template-columns: repeat(4, 1fr);
        } 
    }
</style>