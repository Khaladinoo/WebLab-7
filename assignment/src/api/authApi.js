export async function login(username, password){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if (password == 'demo123456' && username && username.trim() !==''){
                resolve({
                    username: username.trim(),
                    loginTime: new Date().toISOString()
                });
            }else{
                reject(new Error('Invalid credentials'));
            }
        }, 500);
    });
}