const register = (info) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/register',
            data: {
                info
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        });
    });
const login = (account, password) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/login',
            data: {
                account,
                password
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        });
    });
const checkLogin = () =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/check',
            data: {},
            dataType: 'json',
            cache: false,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        });
    });

const addEquip = (equipName, position, amount) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/equip',
            data: {
                equipName,
                position,
                amount
            },
            dataType: 'json',
            cache: false,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        });
    });
const getEquip = () =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/getequip',
            data: {},
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const editEquip = (data) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/editequip',
            data,
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    })
const addLab = (name, manager, equips, available) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/addlab',
            data: {
                name,
                manager,
                equips,
                available
            },
            dataType: 'json',
            cache: false,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    })

const getLab = () =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/getlab',
            data: {},
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });

const editLab = (name, manager, time, equip) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/editlab',
            data: {
                name,
                manager,
                time,
                equip
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });

const addPass = (title, content) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/addpass',
            data: {
                title,
                content
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });

const getPass = () =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/getpass',
            data: {},
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });

const editPass = (id, title, content) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/editpass',
            data: {
                id,
                title,
                content
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const deletePass = (id) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/dpass',
            data: {
                id
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const sendNotice = (content) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/tip',
            data: {
                content
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });

const getDocs = () =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/getdocs',
            data: {
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const deleteDoc = (path) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/deletedoc',
            data: {
                path
            },
            dataType: 'json',
            cache: false,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const teacherInf = (name, lessons, classes) =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/teacher',
            data: {
                name,
                lessons,
                classes
            },
            dataType: 'json',
            cache: false,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const getTeacher = (name) => 
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/getteacher',
            data: {
                name
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const arrange = (type, name='', theClass='', lesson='', lab='', time='', teacher='') =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/arrange',
            data: {
                type,
                name,
                theClass,
                lesson,
                lab,
                time,
                teacher
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
const getExps = (type, path='') =>
    new Promise((resolve, reject) => {
        $.ajax({
            type: 'GET',
            url: '/getexp',
            data: {
                type,
                path
            },
            dataType: 'json',
            cache: true,
            success(resp) {
                resolve(resp);
            },
            error(resp) {
                reject(resp);
            }
        })
    });
export default {
    register,
    login,
    checkLogin,
    addEquip,
    getEquip,
    editEquip,
    addLab,
    getLab,
    editLab,
    addPass,
    getPass,
    editPass,
    deletePass,
    sendNotice,
    getDocs,
    deleteDoc,
    teacherInf,
    getTeacher,
    arrange,
    getExps
}