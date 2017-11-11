<template>
    <div :class="classes" :style="style">
        <slot></slot>
    </div>
</template>

<script>
    const props = ['span', 'offset', 'pull', 'push'],
            sizes = ['xs', 'sm', 'md', 'lg'];

    export default {
        name: 'BCol',

        props: {
            span: {
                type: [Number, String],
                default: 24,
                validator(value){
                    const val = parseFloat(value)
                    return !isNaN(val);
                }
            },
            offset: {
                type: [Number, String],
                default: 0,
                validator(value){
                    const val = parseFloat(value)
                    return !isNaN(val);
                }
            },
            pull: {
                type: [Number, String],
                default: 0,
                validator(value){
                    const val = parseFloat(value)
                    return !isNaN(val);
                }
            },
            push: {
                type: [Number, String],
                default: 0,
                validator(value){
                    const val = parseFloat(value)
                    return !isNaN(val);
                }
            },
            xs: [Number, String, Object],
            sm: [Number, String, Object],
            md: [Number, String, Object],
            lg: [Number, String, Object]
        },

        computed: {
            gutter() {
                // 栅格间距
                return this.$parent.gutter_num;
            },
            style() {
                const ret = {};
                if (this.gutter) {
                    ret.paddingRight = ret.paddingLeft = `${this.gutter / 2}px`;
                }
                return ret;
            },
            classes(){
                const classes = ['b-col'];
                props.forEach(prop => {
                    if (this[prop]) {
                        classes.push(prop !== 'span' ? `b-col-${prop}-${this[prop]}` : `b-col-${this[prop]}`);
                    }
                });
                // 自适应
                sizes.forEach(size => {
                    let type = typeof this[size];
                    if (type === 'string' || type === 'number') {
                        classes.push(`b-col-${size}-${this[size]}`);
                    } else if (type === 'object') {
                        const props = this[size];
                        Object.keys(props).forEach(prop => {
                            if (props.indexOf(prop) > -1) {
                                classes.push(prop !== 'span' ? `b-col-${size}-${prop}-${props[prop]}` : `b-col-${size}-${props[prop]}`);
                            }
                        });
                    }
                });
                return classes;
            },
        }
    };

</script>
