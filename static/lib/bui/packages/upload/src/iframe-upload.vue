<script>
    import Cover from './cover.vue';

    export default {
        components: {
            Cover
        },
        props: {
            type: {
                type: String,
                default: 'select'
            },
            data: {},
            action: {
                type: String,
                required: true
            },
            name: {
                type: String,
                default: 'file'
            },
            withCredentials: Boolean,
            accept: String,
            onStart: Function,
            onProgress: Function,
            onSuccess: Function,
            onError: Function,
            beforeUpload: Function,
            onPreview: {
                type: Function,
                default: function () {
                }
            },
            onRemove: {
                type: Function,
                default: function () {
                }
            }
        },

        data() {
            return {
                file: null,
                disabled: false
            };
        },

        computed: {
            lastestFile() {
                var fileList = this.$parent.fileList;
                return fileList[fileList.length - 1];
            },
            showCover() {
                var file = this.lastestFile;
                return this.needImage && file && file.status !== 'fail';
            },
            needImage() {
                return this.type.indexOf('image') > -1;
            },
            hideUpload(){
                return this.type === 'image-s';
            },
            canDrag(){
                return this.type === 'drag' || this.type.indexOf('image') > -1;
            }
        },

        methods: {
            isImage(str) {
                return str.indexOf('image') !== -1;
            },
            handleClick() {
                if (!this.disabled) {
                    this.$refs.input.click();
                }
            },
            handleChange(ev) {
                const file = ev.target.files[0];
                this.file = file;
                this.onStart(file);

                const formNode = this.getFormNode();
                const dataSpan = this.getFormDataNode();
                let data = this.data;
                if (typeof data === 'function') {
                    data = data(file);
                }
                const inputs = [];
                for (const key in data) {
                    if (data.hasOwnProperty(key)) {
                        inputs.push(`<input name="${key}" value="${data[key]}"/>`);
                    }
                }
                dataSpan.innerHTML = inputs.join('');
                formNode.submit();
                dataSpan.innerHTML = '';
                this.disabled = true;
            },
            getFormNode() {
                return this.$refs.form;
            },
            getFormDataNode() {
                return this.$refs.data;
            },
            onload(e) {
                this.disabled = false;
            }
        },

        mounted() {
            !this.$isServer && window.addEventListener('message', (event) => {
                var targetOrigin = new URL(this.action).origin;
                if (event.origin !== targetOrigin) {
                    return false;
                }
                var response = event.data;
                if (response.result === 'success') {
                    this.onSuccess(response, this.file);
                } else if (response.result === 'failed') {
                    this.onSuccess(response, this.file);
                }
            }, false);
        },

        render(h) {
            var cover = <cover image={this.lastestFile} on-remove={this.onRemove}
                               on-upload={this.handleClick} hide-upload={this.hideUpload}></cover>;
            var frameName = 'frame-' + Date.now();
            return (
                    <div
                            class={{
                                'b-upload__inner': true,
                                'b-dragger': this.canDrag
                            }}
                            on-click={this.handleClick}
                    >
                        <iframe
                                on-load={this.onload}
                                ref="iframe"
                                name={frameName}
                        >
                        </iframe>
                        <form ref="form" action={this.action} target={frameName} enctype="multipart/form-data"
                              method="POST">
                            <input
                                    class="b-upload__input"
                                    type="file"
                                    ref="input"
                                    name="file"
                                    on-change={this.handleChange}
                                    accept={this.accept}>
                            </input>
                            <input type="hidden" name="documentDomain" value={ this.$isServer ? '' : document.domain }/>
                            <span ref="data"></span>
                        </form>
                        {!this.showCover ? this.$slots.default : cover}
                    </div>
            );
        }
    };
</script>
