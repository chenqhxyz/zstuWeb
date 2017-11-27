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
export default {
    register,
    login,
    checkLogin,
    addEquip,
    getEquip,
    editEquip,
    addLab,
    getLab,
    editLab
}