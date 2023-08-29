const ZKLib = require('zklib-js')

const test = async () => {

    let zkInstance = new ZKLib('10.150.46.41', 4370, 5200, 5000);
    try {
        await zkInstance.createSocket()
    } catch (e) {
        console.log(e)
    }

    const users = await zkInstance.getUsers()
    console.log(users)
    
    await zkInstance.setUser(12, '9', 'testing', '111', 0, 0);

    await zkInstance.disconnect()
 
}

test();