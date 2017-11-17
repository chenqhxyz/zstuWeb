<template>
   <div>
        <components :is="currentView" :resp-name="respName"></components>
   </div>
</template>
      
<script>
import util from '../../../util/util.js';
import Manager from './manager.vue';
import Student from './student.vue';
import Teacher from './teacher.vue';
    export default {
        data() {
            return {
                respName: '',
                currentView: ''
            };
        },
        methods: {
        },
        created() {
            util.checkLogin().then((resp) => {
                if (!resp.success) {
                    window.location.href = 'http://local.zstu.com';
                }
                this.respName = resp.name;
                if (+resp.type === 1) {
                    this.currentView = 'Student';
                } else if (+resp.type === 2) {
                    this.currentView = 'Teacher';
                } else if (+resp.type === 3) {
                    this.currentView = 'Manager';
                }
            });
        },
        components: {
            Manager,
            Student,
            Teacher
        }
    }
</script>
      
<style lang="less">

</style>