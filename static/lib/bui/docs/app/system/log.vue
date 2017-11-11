<template>
    <div>
        <update-log v-for="log in logs" :version="log.version" :list="log.list"></update-log>
    </div>
</template>
<script>
    const logs = [];
    function addLog(version,list) {
        logs.unshift({
            version,
            list
        });
    }
    addLog('0.0.20',['表格组件支持固定列功能 (by luming.zhu)']);
    addLog('0.0.21',['修复dialog弹窗模糊问题 (by luming.zhu)']);
    addLog('0.0.22',['修复 b-input在type=textarea时回车报js错误 (by luming.zhu)']);
    addLog('0.0.23',['form组件优化,fields由事件维护改成实时查找,同时推荐对动态form-item进行div包装,避免后面相邻的form-item重新渲染 (by luming.zhu)']);
    addLog('0.0.24',['修复0.0.23中BUG,from无法查找孙子及其后代form-item (by luming.zhu)']);
    addLog('0.0.25',['b-table-column增加hidden属性,支持隐藏某列显示 (by luming.zhu)']);
    addLog('0.0.26',['增加跑马灯组件b-marquee (by wanqiang.pan)']);
    addLog('0.0.27',['优化组件b-marquee显示 (by wanqiang.pan)']);
    addLog('0.0.28',['b-button按钮增加固定宽度和加载中功能 (by luming.zhu)','messageBox配置开发输入框默认值inputValue (by luming.zhu)','修复b-from 在inline下样式问题 (by luming.zhu)']);
    addLog('0.0.29',['修复messageBox配置开发输入框默认值inputValue初始化问题 (by luming.zhu)']);
    addLog('0.0.30',['dialog增加侧滑效果 (by wanqiang.pan)','修复走马灯滚动闪烁问题 (by wanqiang.pan)']);
    addLog('0.0.31',['修复b-table在嵌套表头情况下column动态变化错乱问题 (by luming.zhu)','修复b-table在empty-text无效问题 (by luming.zhu)','b-table内的table添加默认样式border-collapse:separate; (by luming.zhu)']);
    addLog('0.0.32',['b-table hover效果可开关,默认关闭 (by luming.zhu)']);
    addLog('0.0.33',['b-radio-group单选按钮组件增加light属性支持不一样的样式 (by luming.zhu)']);
    addLog('0.0.34',['$msgbox支持以html形式插入内容 (by luming.zhu)']);
    addLog('0.0.35',['修复b-form表单在inline下使用label-with显示异常 (by luming.zhu)']);
    addLog('0.0.36',['$message支持以html形式插入内容 (by luming.zhu)']);
    addLog('0.0.37',['b-select,b-input,b-autocomplete 都支持size和windth 定义尺寸 (by luming.zhu)']);
    addLog('0.0.38',['$message增加loading提示状态 (by wanqiang.pan)']);
    addLog('0.0.39',['b-autocomplete 增加must-select属性(默认关闭)实现文本框内容必须是某个提示结果 (by luming.zhu)','b-radio-group,b-radio 增加clearable属性(默认关闭)实现可取消选中 (by luming.zhu)']);
    addLog('0.0.40',['b-table 表头颜色改成#F8F9FA (by luming.zhu)','修复b-date-pick在变化月份值时偶尔出现多增加1个月的BUG (by luming.zhu)']);
    addLog('0.0.41',['b-tooltip 增加manual属性，设为true时开启手动控制模式，mouseenter 和 mouseleave 事件将不会生效 (by wanqiang.pan)']);
    addLog('0.0.42',['b-form-item bug修复 error支持清除(by luming.zhu)','b-checkbox-group bug修复disabled可用 (by luming.zhu)']);
    addLog('0.0.43',['b-row,b-col 代码进行了优化，整个官网的文档进行了优化']);
    //todo new Log add here

    export default{
        data(){
            return {
                logs
            }
        }
    }
</script>
