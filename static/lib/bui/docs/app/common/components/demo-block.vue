<template>
    <div
            class="demo-block"
            @mouseenter="hovering = true"
            @mouseleave="hovering = false">
        <slot name="source"></slot>
        <div class="meta">
            <div class="description">
                <slot></slot>
            </div>
            <div class="highlight">
                <slot name="highlight"></slot>
                <div class="code-clip b-icon-document" ref="clip_btn"></div>
            </div>
            <code style="display: none;" ref="code">
                <slot name="code"></slot>
            </code>
        </div>
        <div class="demo-block-control" @click="isExpanded = !isExpanded">
            <transition name="arrow-slide">
                <i :class="[iconClass, { 'hovering': hovering }]"></i>
            </transition>
            <transition name="text-slide">
                <span v-show="hovering">{{ controlText }}</span>
            </transition>
        </div>
    </div>
</template>

<style lang="less">
    @import '../../../../src/less/var.less';

    .demo-block {
        border: @border-base;
        border-radius: @radius-base;
        transition: .2s;

        & + .demo-block{
            margin-top: 20px;
        }


        &.hover {
            box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
        }

        code {
            font-family: Menlo, Monaco, Consolas, Courier, monospace;
        }

        .demo-button {
            float: right;
        }

        .source {
            padding: 24px;
        }

        .meta {
            background-color: @bg-light;
            border-top: @border-base;
            clear: both;
            overflow: hidden;
            height: 0;
            transition: height .2s;
        }

        .description {
            padding: 18px 24px;
            width: 40%;
            box-sizing: border-box;
            border-left: @border-base;
            float: right;
            font-size: 14px;
            line-height: 1.8;
            color: #5e6d82;
            word-break: break-all;

            p {
                margin: 0 0 12px;
            }

            code {
                color: #5e6d82;
                background-color: #e6effb;
                margin: 0 4px;
                transform: translateY(-2px);
                display: inline-block;
                padding: 1px 5px;
                font-size: 12px;
                border-radius: 3px;
            }
        }

        .highlight {
            width: 60%;
            border-right: @border-base;
            position: relative;

            pre {
                margin: 0;
            }

            code.hljs {
                margin: 0;
                border: none;
                max-height: none;
                border-radius: 0;

                &::before {
                    content: none;
                }

                line-height: 1.8;
                font-family: Menlo, Monaco, Consolas, Courier, monospace;
                font-size: 12px;
                padding: 18px 24px;
                background-color: #f9fafc;
                border: solid 1px #eaeefb;
                margin-bottom: 25px;
                border-radius: 4px;
            }

            .code-clip {
                position: absolute;
                right: 2px;
                top: 2px;
                width: 24px;
                line-height: 24px;
                font-size: 18px;
                text-align: center;
                cursor: pointer;
                opacity: .2;

                &:hover {
                    opacity: 1;
                }
            }

        }

        .demo-block-control {
            border-top: @border-base;
            height: 36px;
            box-sizing: border-box;
            background-color: #fff;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            text-align: center;
            margin-top: -1px;
            color: @border-base-color;
            cursor: pointer;
            transition: .2s;
            position: relative;

            i {
                font-size: 12px;
                line-height: 36px;
                transition: .3s;
                &.hovering {
                    transform: translateX(-40px);
                }
            }

            span {
                position: absolute;
                transform: translateX(-30px);
                font-size: 14px;
                line-height: 36px;
                transition: .3s;
                display: inline-block;
            }

            &:hover {
                color: @color-base;
                background-color: @bg-light;
            }

            & .text-slide-enter,
            & .text-slide-leave-active {
                opacity: 0;
                transform: translateX(10px);
            }
        }

    }
</style>

<script type="text/babel">
    import {addClass} from 'src/utils/dom.js';
    import Clipboard from 'clipboard';

    export default {
        data() {
            return {
                hovering: false,
                isExpanded: false
            };
        },

        props: {
            default() {
                return {};
            }
        },

        methods: {},

        computed: {

            blockClass() {
                return `demo-${ this.lang } demo-${ this.$router.currentRoute.path.split('/').pop() }`;
            },

            iconClass() {
                return this.isExpanded ? 'b-icon-caret-top' : 'b-icon-caret-bottom';
            },

            controlText() {
                return this.isExpanded ? '隐藏代码' : '显示代码';
            },

            codeArea() {
                return this.$el.getElementsByClassName('meta')[0];
            },

            codeAreaHeight() {
                if (this.$el.getElementsByClassName('description').length > 0) {
                    return Math.max(this.$el.getElementsByClassName('description')[0].clientHeight, this.$el.getElementsByClassName('highlight')[0].clientHeight);
                }
                return this.$el.getElementsByClassName('highlight')[0].clientHeight;
            }
        },

        watch: {
            isExpanded(val) {
                this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
            }
        },

        mounted() {
            this.$nextTick(() => {
                let highlight = this.$el.getElementsByClassName('highlight')[0];
                if (this.$el.getElementsByClassName('description').length === 0) {
                    highlight.style.width = '100%';
                    highlight.borderRight = 'none';
                }
            });
            const clip_btn = this.$refs.clip_btn;
            const code = this.$refs.code;
            if (clip_btn) {
                this._clipboard = new Clipboard(clip_btn, {
                    text(){
                        return code.innerText;
                    }
                });
                this._clipboard.on('success', e => {
                    e.clearSelection();
                    this.$message({
                        type: 'success',
                        message: '代码已复制到剪贴板'
                    });
                });
            }
        },

        destroy(){
            if (this._clipboard) {
                this._clipboard.destroy();
            }
        }
    };
</script>
