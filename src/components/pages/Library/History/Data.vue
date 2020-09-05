<template>
    <div class="template x-8">
        <div class="flex justify-between items-center px-2 py-1 br-lg bgcolor-greyscale-3">
            <p class="text-white">{{ data.date }}</p>
            <HistoryDropdownIcon @click="toggleLog" class="hover:cursor-pointer"/>
        </div>

        <div class="mt-4 px-4 py-2 br-lg bgcolor-greyscale-1" :class="{'hidden': hideLog}">
            <div v-for="log in data.log" :key="data.date + log.title + log.time + log.progress">
                <Log v-bind:log="log" />
            </div>
        </div>
    </div>
</template>

<script>
import HistoryDropdownIcon from '@/assets/icons/HistoryDropdownIcon.svg'
import Log from './Log'

export default {
    name: "HistoryData",
    components: {
        HistoryDropdownIcon,
        Log
    },
    props: ['data'],
    methods: {
        toggleLog() {
            this.hideLog = !this.hideLog
        }
    },
    data() {
        return {
            hideLog: true
        }
    }
}
</script>