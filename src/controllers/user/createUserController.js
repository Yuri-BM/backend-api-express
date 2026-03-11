import { createUser } from '../../models/userModel.js';

export async function createUserController(req, res){
    try {
        const user = req.body || {
            avatar: "https://github.com/Yuri-BM.png",
            name: "Yuri",
            email: "yuribm1604@gmail.com",
            pass: "12345678"
        };

        const result = await createUser(user);

        res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: result
        });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
}