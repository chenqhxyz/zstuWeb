<template>
    <button :disabled="disabled" class="b-button"
            @click="handleClick"
            :type="nativeType"
            :style="{width:widthStyle}"
            :class="[
      type ? 'b-button--' + type : '',
      size ? 'b-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-width': widthStyle.length > 0
      }
    ]"
    >
        <i class="b-icon-loading" v-if="loading"></i>
        <i :class="['b-icon-' + icon]" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
        <i :class="['b-icon-' + iconRight]" v-if="iconRight && !loading"></i>
    </button>
</template>
<script>
    export default {
        name: 'BButton',

        props: {
            type: String,
            size: String,
            icon: String,
            iconRight: String,
            nativeType: { //不开放先
                type: String,
                default: 'button'
            },
            disabled: Boolean,
            loading: Boolean,
            width: {
                type: [String, Number],
                default: ''
            }
        },

        computed: {
            widthStyle(){
                return typeof this.width === 'number' ? `${this.width}px` : this.width;
            }
        },

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };
</script>
