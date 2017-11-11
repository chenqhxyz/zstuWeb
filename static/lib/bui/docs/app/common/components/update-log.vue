<template>
    <div class="update-log">
        <div class="update-log__version">{{version}}</div>
        <ul class="update-log__list" v-if="list">
            <li v-for="item in list" v-html="item"></li>
        </ul>
        <slot v-else></slot>
    </div>
</template>
<style lang="less">
    .update-log{
        margin-bottom: 50px;
        line-height: 1.8;
    }
    .update-log__version{
        font-size: 22px;
        margin-bottom: 10px;
    }
    .update-log__list{
        font-size: 14px;
        padding-left: 20px;
    }
</style>
<script type="text/babel">
    export default {
        props: {
            version:{
                type: String,
                required:true
            },
            list:{
                type: Array
            }
        }
    }
</script>
