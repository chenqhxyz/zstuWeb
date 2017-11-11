// @desc
// @author  luming.zhu
import './index.less';
import Row from '../packages/row/index.js';
import Col from '../packages/col/index.js';
import Menu from '../packages/menu/index.js';
import MenuItem from '../packages/menu-item/index.js';
import MenuItemGroup from '../packages/menu-item-group/index.js';
import SubMenu from '../packages/submenu/index.js';
import Button from '../packages/button/index.js';
import Alert from '../packages/alert/index.js';
import Radio from '../packages/radio/index.js';
import RadioButton from '../packages/radio-button/index';
import RadioGroup from '../packages/radio-group/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import Input from '../packages/input/index.js';
import Autocomplete from '../packages/autocomplete/index.js';
import Dialog from '../packages/dialog/index.js';
import Select from '../packages/select/index.js';
import Tabs from '../packages/tabs/index.js';
import TabPane from '../packages/tab-pane/index.js';
import Option from '../packages/option/index.js';
import Tooltip from '../packages/tooltip/index.js';
import Form from '../packages/form/index.js';
import FormItem from '../packages/form-item/index.js';
import Table from '../packages/table/index.js';
import TableColumn from '../packages/table-column/index.js';
import Switch from '../packages/switch/index.js';
import Progress from '../packages/progress/index.js';
import Pagination from '../packages/pagination/index.js';
import Breadcrumb from '../packages/breadcrumb/index.js';
import BreadcrumbItem from '../packages/breadcrumb-item/index.js';
import Tree from '../packages/tree/index.js';
import DatePicker from '../packages/date-picker/index.js';
import TimePicker from '../packages/time-picker/index.js';
import TimeSelect from '../packages/time-select/index.js';
import Upload from '../packages/upload/index.js';
import Tag from '../packages/tag/index';
import Message from '../packages/message/index.js';
import MessageBox from '../packages/message-box/index.js';
import Marquee from '../packages/marquee/index.js';
import MarqueeItem from '../packages/marquee-item/index.js';

const components = [
    Row,
    Col,
    Menu,
    MenuItem,
    MenuItemGroup,
    SubMenu,
    Button,
    Alert,
    Radio,
    RadioButton,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Input,
    Autocomplete,
    Dialog,
    Select,
    Tabs,
    TabPane,
    Option,
    Tooltip,
    Form,
    FormItem,
    Table,
    TableColumn,
    Switch,
    Progress,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    Tree,
    DatePicker,
    TimePicker,
    TimeSelect,
    Upload,
    Tag,
    Marquee,
    MarqueeItem
];

const install = function (Vue) {
    if (install.installed) return;
    components.forEach(component => {
        Vue.component(component.name, component);
    });

    Vue.prototype.$message = Message;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    version: '0.0.43',
    install,
    Message,
    MessageBox,
    Row,
    Col,
    Menu,
    MenuItem,
    MenuItemGroup,
    SubMenu,
    Button,
    Alert,
    Radio,
    RadioButton,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Input,
    Autocomplete,
    Dialog,
    Select,
    Tabs,
    TabPane,
    Option,
    Tooltip,
    Form,
    FormItem,
    Table,
    TableColumn,
    Switch,
    Progress,
    Pagination,
    Breadcrumb,
    BreadcrumbItem,
    Tree,
    DatePicker,
    TimePicker,
    TimeSelect,
    Upload,
    Tag,
    Marquee,
    MarqueeItem
};
