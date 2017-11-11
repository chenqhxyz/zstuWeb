<template>
    <span
            class="b-tag"
            :class="[type ? 'b-tag--' + type : '']">
        <slot></slot>
      <i class="b-tag__close b-icon-close"
         v-if="closable"
         @click="handleClose"></i>
    </span>
</template>
<script>
    export default {
        name: 'BTag',
        props: {
            closable: Boolean,
            type: String
        },
        methods: {
            handleClose(event) {
                this.$emit('close', event);
            }
        }
    };
</script>
