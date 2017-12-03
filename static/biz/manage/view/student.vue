<template>
    <div>
         123      
    </div>
</template>

<script>
import util from '../../../util/util.js';
export default {
    data() {
        return {
        };
    },
    methods: {
    },
    components: {
    },
    mounted() {
        util.sendNotice(1).then((resp) => {
             this.$notify({
                title: '通知',
                message: resp.data[0].content,
                duration: 0
            });
        })
    }
}
</script>
               
<style lang="less">
         
</style>