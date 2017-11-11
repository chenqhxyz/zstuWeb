<template>
    <div :class="classes" :style="style">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BRow',

        props: {
            // 栅格间隔
            gutter: {
                type: [String, Number],
                default: 0,
                validator(value){
                    let num = parseFloat(value);
                    return !isNaN(num);
                }
            },
            // 类型，暂时只支持flex
            type: String,
            // flex下的水平布局
            justify: {
                type: String,
                default: 'start',
                validator(value){
                    return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) > -1;
                }
            },
            // flex下的垂直布局
            align: {
                type: String,
                default: 'top',
                validator(value){
                    return ['top', 'bottom', 'middle'].indexOf(value) > -1;
                }
            }
        },

        computed: {
            gutter_num(){
                // gutter的数值表示
                return parseInt(this.gutter);
            },
            classes(){
                const classes = ['b-row'];
                if (this.type === 'flex') {
                    classes.push('b-row--flex');
                    classes.push(`is-justify-${this.justify}`);
                    classes.push(`is-align-${this.align}`);
                }
                return classes;
            },
            style() {
                const ret = {},
                        gutter = this.gutter_num;
                if (gutter) {
                    ret.marginRight = ret.marginLeft = `-${gutter / 2}px`;
                }
                return ret;
            },
        }
    };
</script>
