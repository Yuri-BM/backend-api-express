import { createUser } from '../../models/userModel.js';

export function createUserController(req, res){
    
    const user = {
        avatar: "https://github.com/Yuri-BM.png",
        name: "Yuri",
        email: "yuribm1604@gmail.com",
        pass: "12345678"
    };

    res.json({
        message: "Usuário criado com sucesso!",
        user: result
    })
}