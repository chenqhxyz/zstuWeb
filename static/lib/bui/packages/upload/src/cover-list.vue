<template>
    <transition-group tag="ul" class="b-upload__imgs">
        <li
                v-for="file in files"
                class="b-upload__img"
                :key="file"
        >
            <cover :image="file" @remove="$emit('remove',file)" hide-upload></cover>
        </li>
    </transition-group>
</template>
<script>
    import Cover from './cover.vue';

    export default {
        components: {Cover},

        props: {
            files: {
                type: Array,
                default() {
                    return [];
                }
            }
        }

    };
</script>
