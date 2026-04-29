import { updateUser, validateUser } from "../../models/userModel.js";

export async function updateAvatarUserController(req, res){
    const {id} = req.params
    const user = req.body

    const {success, error, data} = validateUser(user.id, {name: true, pass: true, email: true})

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        })
    }

    const result = await updateUser(user, data.id)

    return res.json({
        message: "Avatar do usuário atualizado com sucesso!",
        user: result
    })
}