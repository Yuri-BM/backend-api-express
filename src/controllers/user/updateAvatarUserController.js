import { updateUser } from "../../models/userModel.js";

export async function updateAvatarUserController(req, res){
    const {id} = req.params
    const user = req.body

    const result = await updateUser(user, +id)

    return res.json({
        message: "Avatar do usuário atualizado com sucesso!",
        user: result
    })
}