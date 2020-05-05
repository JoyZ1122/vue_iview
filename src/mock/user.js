const USER_MAP = {
    super_admin: {
        username: 'super_admin',
        user_id: '1',
        access: ['super_admin', 'admin'],
        token: 'super_admin',
        avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
    },
    admin: {
        username: 'admin',
        user_id: '2',
        access: ['admin'],
        token: 'admin',
        avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
    }
}

export const login = req => {
    req = JSON.parse(req.body)
    return { 
        message: "success",
        status: 1,
        data:{
            access_token: USER_MAP[req.username].token 
        }
    }
}


