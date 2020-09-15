<template>
    <div class="WatchStatusBar fixed">
        <h3 class="text-3xl font-bold text-white mt-4 mb-4"> Watch Status </h3>
        <div class="status">
            <PlanIcon />
            <Button> plan to watch </Button>
        </div>
        <div class="status">
            <WatchingIcon />
            <Button> watching </Button>
        </div>
        <div class="status">
            <SeenIcon />
            <Button> seen </Button>
        </div>
        <div class="status">
            <OnholdIcon />
            <Button> on hold </Button>
        </div>
        <div class="status">
            <DroppedIcon />
            <Button> dropped </Button>
        </div>
    </div>
</template>

<script>
import PlanIcon from '@/assets/icons/PlanIcon.svg'
import WatchingIcon from '@/assets/icons/WatchingIcon.svg'
import SeenIcon from '@/assets/icons/SeenIcon.svg'
import OnholdIcon from '@/assets/icons/OnholdIcon.svg'
import DroppedIcon from '@/assets/icons/DroppedIcon.svg'

export default {
    name: 'WatchStatusBar',
    components: {
        PlanIcon,
        WatchingIcon,
        SeenIcon,
        OnholdIcon,
        DroppedIcon
    }
}
</script>

<style scoped>

    .status {
        display: flex;
        align-items: center;
        margin-bottom: 1em;
    }

    .status Button {
        margin-left: 1em;
        text-transform: uppercase;
        color: var(--color-greyscale-3);
        font-weight: bold;
        font-size: 18px;
    }
</style>