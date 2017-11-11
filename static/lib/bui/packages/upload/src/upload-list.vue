<template>
  <transition-group tag="ul" class="b-upload__files" name="list">
    <li
      v-for="file in files"
      class="b-upload__file"
      :class="{
        'is-finished': file.status === 'finished'
      }"
      :key="file"
      @click="$emit('clickFile', file)"
    >
      <a class="b-upload__file__name" @click="$emit('preview', file)">
        <i class="b-icon-document"></i>{{file.name}}
      </a>
      <span class="b-upload__btn-delete" @click="$emit('remove', file)" v-show="file.status === 'finished'">删除</span>
      <b-progress
        v-if="file.showProgress"
        :stroke-width="2"
        :percentage="parsePercentage(file.percentage)"
        :status="file.status === 'finished' && file.showProgress ? 'success' : ''">
      </b-progress>
    </li>
  </transition-group>
</template>
<script>
  import BProgress from 'packages/progress';

  export default {
    components: { BProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      }
    }
  };
</script>
