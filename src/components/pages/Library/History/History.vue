<template>
    <div class="History bgcolor-greyscale-2">
        <header class="flex justify-center py-4">
            <p class="text-white text-xl font-bold"> History </p>
        </header>
        
        <div class="px-8">
            <div class="listdata pr-1">
                <div v-for="data in history" :key="data.id">
                    <HistoryData v-bind:data="data" />
                </div>
            </div>
        </div>

        <footer class="flex justify-end mt-4 px-8 py-4">
            <ButtonPrimarySm text="Close" v-on:clicked="$emit('close-history')"  class="CloseButton color-accent-5" />
        </footer>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonPrimarySm from '@/components/common/Buttons/ButtonPrimarySm'
import HistoryData from '@/components/pages/Library/History/Data'

export default {
    name: 'History',
    components: {
        ButtonPrimarySm,
        HistoryData
    },
    computed: mapGetters(['history'])
}
</script>

<style scoped>

    .CloseButton {
        background: transparent;
    }

    .History {
        width: 640px;
        border-radius: 24px;
    }

    .listdata {
        max-height: 300px;
        overflow-y: auto;
    }

    footer {
        border-top: solid 1px #fff;
    }
</style>   