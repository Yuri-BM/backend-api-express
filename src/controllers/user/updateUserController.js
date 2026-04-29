import { updateUser, validateUser } from "../../models/userModel.js";

export async function updateUserController(req, res){
    const {id} = req.params
    const user = req.body

    const {success, error, data} = validateUser({id: +id, avatar: user.avatar, name: user.name, email: user.email, pass: user.pass})

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        })
    }

    const result = await updateUser(user, data.id)

    return res.json({
        message: "Usuário atualizado com sucesso!",
        user: result
    })
}