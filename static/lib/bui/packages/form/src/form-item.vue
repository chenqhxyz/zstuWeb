<template>
  <div class="b-form-item" :class="{
    'is-error': validateState === 'error',
    'is-validating': validateState === 'validating',
    'is-required': isRequired || required
  }">
    <label :for="prop" class="b-form-item__label" :style="labelStyle" v-if="label">
      {{label + form.labelSuffix}}
    </label>
    <div class="b-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="b-zoom-in-top">
        <div class="b-form-item__error" v-if="validateState === 'error' && showMessage && form.showMessage">{{validateMessage}}</div>
      </transition>
    </div>
  </div>
</template>
<script>
  import AsyncValidator from 'async-validator';

  function noop() {}

  function getPropByPath(obj, path) {
    let tempObj = obj;
    path = path.replace(/\[(\w+)\]/g, '.$1');
    path = path.replace(/^\./, '');

    let keyArr = path.split('.');
    let i = 0;

    for (let len = keyArr.length; i < len - 1; ++i) {
      let key = keyArr[i];
      if (key in tempObj) {
        tempObj = tempObj[key];
      } else {
        throw new Error('please transfer a valid prop path to form item!');
      }
    }
    return {
      o: tempObj,
      k: keyArr[i],
      v: tempObj[keyArr[i]]
    };
  }

  export default {
    name: 'BFormItem',

    componentName: 'BFormItem',

    props: {
      label: String,
      labelWidth: String,
      prop: String,
      required: Boolean,
      rules: [Object, Array],
      error: String,
      validateStatus: String,
      showMessage: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      error(value) {
        if(value){
          this.validateMessage = value;
          this.validateState = 'error';
        }else{
          this.validateMessage = '';
          this.validateState = '';
        }
      },
      validateStatus(value) {
        this.validateState = value;
      }
    },
    computed: {
      labelStyle() {
        var ret = {};
        var labelWidth = this.labelWidth || this.form.labelWidth;
        if (labelWidth) {
          ret.width = labelWidth;
        }
        return ret;
      },
      contentStyle() {
        var ret = {};
        var labelWidth = this.labelWidth || this.form.labelWidth;
        if (!this.form.inline && labelWidth) {
          ret.marginLeft = labelWidth;
        }
        return ret;
      },
      form() {
        var parent = this.$parent;
        while (parent.$options.componentName !== 'BForm') {
          parent = parent.$parent;
        }
        return parent;
      },
      fieldValue: {
        cache: false,
        get() {
          var model = this.form.model;
          if (!model || !this.prop) { return; }

          var path = this.prop;
          if (path.indexOf(':') !== -1) {
            path = path.replace(/:/, '.');
          }

          return getPropByPath(model, path).v;
        }
      }
    },
    data() {
      return {
        validateState: '',
        validateMessage: '',
        validateDisabled: false,
        validator: {},
        isRequired: false
      };
    },
    methods: {
      validate(trigger, callback = noop) {
        var rules = this.getFilteredRule(trigger);
        if (!rules || rules.length === 0) {
          callback();
          return true;
        }

        this.validateState = 'validating';

        var descriptor = {};
        descriptor[this.prop] = rules;

        var validator = new AsyncValidator(descriptor);
        var model = {};

        model[this.prop] = this.fieldValue;

        validator.validate(model, { firstFields: true }, (errors, fields) => {
          this.validateState = !errors ? 'success' : 'error';
          this.validateMessage = errors ? errors[0].message : '';

          callback(this.validateMessage);
        });
      },
      resetField() {
        this.validateState = '';
        this.validateMessage = '';

        let model = this.form.model;
        let value = this.fieldValue;
        let path = this.prop;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }

        let prop = getPropByPath(model, path);

        if (Array.isArray(value) && value.length > 0) {
          this.validateDisabled = true;
          prop.o[prop.k] = [];
        } else if (value) {
          this.validateDisabled = true;
          prop.o[prop.k] = this.initialValue;
        }
      },
      getRules() {
        var formRules = this.form.rules;
        var selfRuels = this.rules;

        formRules = formRules ? formRules[this.prop] : [];

        return [].concat(selfRuels || formRules || []);
      },
      getFilteredRule(trigger) {
        var rules = this.getRules();

        return rules.filter(rule => {
          return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
        });
      },
      onFieldBlur() {
        this.validate('blur');
      },
      onFieldChange() {
        if (this.validateDisabled) {
          this.validateDisabled = false;
          return;
        }

        this.validate('change');
      }
    },
    mounted() {
      if (this.prop) {
        Object.defineProperty(this, 'initialValue', {
          value: this.fieldValue
        });

        let rules = this.getRules();

        if (rules.length) {
          rules.every(rule => {
            if (rule.required) {
              this.isRequired = true;
              return false;
            }
          });
          this.$on('b.form.blur', this.onFieldBlur);
          this.$on('b.form.change', this.onFieldChange);
        }
      }
      if (this.error){
        this.validateMessage = this.error;
        this.validateState = 'error';
      }else{
        this.validateMessage = '';
        this.validateState = '';
      }
    }
  };
</script>
