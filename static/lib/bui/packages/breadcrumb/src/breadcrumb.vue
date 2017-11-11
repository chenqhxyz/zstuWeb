<template>
  <div class="b-breadcrumb">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'BBreadcrumb',

    props: {
        useRouter: Boolean,
        replace: Boolean
    }
  };
</script>
