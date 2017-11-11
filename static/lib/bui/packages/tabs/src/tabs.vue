<script>
  import TabNav from './tab-nav';
  export default {
    name: 'BTabs',

    components: {
      TabNav
    },

    props: {
      type: String,
      activeName: String,
      closable: Boolean,
      addable: Boolean,
      value: {},
      mode: {
        type: String,
        default: 'horizontal'
      },
      editable: Boolean
    },

    data() {
      return {
        currentName: this.value || this.activeName,
        panes: []
      };
    },

    watch: {
      activeName(value) {
        this.setCurrentName(value);
      },
      value(value) {
        this.setCurrentName(value);
      },
      currentName(value) {
        if (this.$refs.nav) {
          this.$nextTick(_ => {
            this.$refs.nav.scrollToActiveTab();
          });
        }
      }
    },

    methods: {
      handleTabClick(tab, tabName, event) {
        if (tab.disabled) return;
        this.setCurrentName(tabName);
        this.$emit('tab-click', tab, event);
      },
      handleTabRemove(pane, ev) {
        ev.stopPropagation();
        this.$emit('edit', pane.name, 'remove');
        this.$emit('tab-remove', pane.name);
      },
      handleTabAdd() {
        this.$emit('edit', null, 'add');
        this.$emit('tab-add');
      },
      setCurrentName(value) {
        this.currentName = value;
        this.$emit('input', value);
      },
      addPanes(item) {
        this.panes.push(item);
      },
      removePanes(item) {
        const panes = this.panes;
        const index = panes.indexOf(item);
        if (index > -1) {
          panes.splice(index, 1);
        }
      }
    },
    render(h) {
      let {
        type,
        mode,
        handleTabClick,
        handleTabRemove,
        handleTabAdd,
        currentName,
        panes,
        editable,
        addable
      } = this;

      const newButton = editable || addable
        ? (
            <span
              class="b-tabs__new-tab"
              on-click={ handleTabAdd }
            >
                <i class="b-icon-plus"></i>
            </span>
          )
        : null;

      const navData = {
        props: {
          currentName,
          onTabClick: handleTabClick,
          onTabRemove: handleTabRemove,
          editable,
          type,
          panes
        },
        ref: 'nav'
      };

      return (
        <div class={{
          'b-tabs': true,
          'b-tabs--card': type === 'card',
          'b-tabs--border-card': type === 'border-card',
          'b-tabs--radio': type === 'radio',
          'b-tabs--vertical': mode === 'vertical'
        }}>
          <div class="b-tabs__header">
            {newButton}
            <tab-nav { ...navData }></tab-nav>
          </div>
          <div class="b-tabs__content">
            {this.$slots.default}
          </div>
        </div>
      );
    },
    created() {
      if (!this.currentName) {
        this.setCurrentName('0');
      }
    }
  };
</script>
