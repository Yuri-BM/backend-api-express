import { createUser } from '../../models/userModel.js';

export async function createUserController(req, res){
    try {
        
        const user = req.body 
        console.log('Dados recebidos para criação de usuário:', user); // Log para verificar os dados recebidos

        const result = await createUser(user);

        res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: result
        });

    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error: error.message });
    }
}