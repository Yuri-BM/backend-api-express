import { updatePublication, validatePublication } from "../../models/publicationModel.js";

export async function updateTitlePubliController(req, res){
    const {id} = req.params
    const publication = req.body

    const {success, error, data} = validatePublication({id: +id, title: publication.title}, {description: true, authorId: true})

    if (!success) {
        return res.status(400).json({
            message: "Erro de validação",
            fieldErrors: error.flatten().fieldErrors
        })
    }

    const result = await updatePublication(publication, data.id)

    return res.json({
        message: "Título da publicação atualizado com sucesso!",
        user: result
    })
}