<template>
    <span>
        <del v-if="item.complete">
            {{ item.name }}
        </del>
        <i v-else>{{ item.name }}</i>
        
        <button v-if="!item.complete" @click="$emit('remove')">delete</button>
        <button v-else @click="$emit('recover')">recover</button>
    </span>
</template>

<script>
    export default {
        props: {
            item: Object
        }
    }
</script>
