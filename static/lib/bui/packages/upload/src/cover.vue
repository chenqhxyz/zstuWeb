<template>
    <div class="b-dragger__cover" @click.stop v-if="image">
        <transition name="b-fade-in">
            <b-progress
                    class="b-dragger__cover__progress"
                    v-if="image.status === 'uploading'"
                    :percentage="image.percentage"
                    :show-text="false"
                    :status="image.status === 'finished' ? 'success' : ''">
            </b-progress>
        </transition>
        <div class="b-dragger__cover__content"
             v-if="image.status === 'finished'"
             @mouseenter="mouseover = true"
             @mouseleave="mouseover = false">
            <img :src="image.url">
            <transition name="b-fade-in">
                <div v-show="mouseover" class="b-dragger__cover__interact">
                    <div class="b-dragger__cover__btns">
                        <span v-if="!hideUpload" class="btn" @click="$emit('upload')"><i class="b-icon-upload2"></i><span>继续上传</span></span>
                        <span class="btn" @click="$emit('remove',image)"><i class="b-icon-delete2"></i><span>删除</span></span>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
    import BProgress from 'packages/progress';

    export default {
        components: {BProgress},

        props: {
            image: {},
            hideUpload: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                mouseover: false
            };
        }
    };
</script>
