import { updatePublication } from "../../models/publicationModel.js";

export async function updateTitlePubliController(req, res){
    const {id} = req.params
    const publication = req.body

    const result = await updatePublication(publication, +id)

    return res.json({
        message: "Título da publicação atualizado com sucesso!",
        user: result
    })
}