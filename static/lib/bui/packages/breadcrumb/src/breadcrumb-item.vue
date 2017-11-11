<template>
  <span class="b-breadcrumb__item">
    <span class="b-breadcrumb__item__inner" ref="link"><slot></slot></span><span class="b-breadcrumb__separator b-icon-arrow-right"></span>
  </span>
</template>
<script>
  export default {
    name: 'BBreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {};
    },
    mounted() {
      var self = this;
      if (this.to) {
        let link = this.$refs.link;
        link.addEventListener('click', _ => {
          let to = this.to;
          if (self.$parent.useRouter) {
              self.$parent.replace || self.replace ? self.$router.replace(to)
                  : self.$router.push(to);
          } else {
              self.$parent.replace || self.replace ? window.location.replace(to)
                  : window.location.assign(to);
          }
        });
      }
    }
  };
</script>
