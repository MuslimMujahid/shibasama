<template>
     <div class="flex justify-between mb-2 px-4 br-lg text-white text-sm"
        v-bind:class="{ 
            'bgcolor-accent-5': log.progress < 50,
            'bgcolor-accent-1': log.progress >= 50 && log.progress < 85,
            'bgcolor-accent-3': log.progress >= 85
        }">
        <p> {{ log.title }} </p>
        <div>
            <span> {{ log.progress + '%' }} </span>
            <CloseIcon class="inline-block"/>
        </div>
    </div>
</template>

<script>
import CloseIcon from '@/assets/icons/CloseIcon.svg'

export default {
    name: "Log",
    components: {
        CloseIcon
    },
    props: ['log']
}
</script>