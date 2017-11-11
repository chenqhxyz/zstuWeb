<template>
    <div>
        <template v-for="(item,index) in content">
            <h2>{{item.title}} （by {{item.author}}）</h2>
            <p>{{item.desc}}</p>
            <div class="code-container" ref="jsrun"></div>
        </template>
    </div>
</template>
<script>
    import content from './sjzx-content';

    export default{
        data(){
            return {
                content
            }
        },
        mounted(){
            this.content.forEach(({script}, index) => {
                let dom = document.createElement('script');
                dom.setAttribute('async', 'async');
                dom.setAttribute('src', script);
                console.log(this.$refs,index);
                this.$refs.jsrun[index].appendChild(dom);
            });
        }
    }
</script>
<style lang="less">
    .code-container {
        border: 1px solid #d8dadf;
        border-radius: 2px;
        font-size: 0;
        margin-bottom: 28px;
    }
</style>
