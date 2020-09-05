<template>
    <div class="TagBar fixed">
        <h3 class="text-3xl font-bold text-white mt-4 mb-4"> Tags </h3>
        <Tag topic="new" count="10" class="active" />
        <Tag topic="romance" count="10" />
        <Tag topic="harem" count="10" />
        <Tag topic="action" count="10" />
        <Tag topic="fantasy" count="10" />
    </div>
</template>

<script>
import Tag from './Tag'

export default {
    name: 'TagBar',
    components: {
        Tag
    }
}
</script>  