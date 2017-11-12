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
export default {
	register
}