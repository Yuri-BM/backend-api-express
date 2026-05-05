import { getUsers } from "../../models/userModel.js"

export async function getUsersController(req, res){

    const result = await getUsers()

    return res.json({
        message: "Usuários listados com sucesso",
        users: result
    })
}