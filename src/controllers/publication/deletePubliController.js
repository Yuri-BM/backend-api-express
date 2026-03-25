import { deletePublication } from "../../models/publicationModel.js"

export async function deletePubliController(req, res){
    const id = req.params.id

    const result = await deletePublication(+id) // operador + para converter string para number

    return res.json({
        message: "Publicação deletada com sucesso!",
        user: result
    })
}