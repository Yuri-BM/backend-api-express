import { updatePublication, validatePublication } from "../../models/publicationModel.js";

export async function updatePubliController(req, res, next){
    try {
        const {id} = req.params
        const publication = req.body

        const {success, error, data} = validatePublication({id: +id, title: publication.title, description: publication.description, authorId: publication.authorId})

        if (!success) {
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await updatePublication(data, data.id)

        return res.json({
            message: "Publicação atualizada com sucesso!",
            user: result
        })
    } catch(error) {

        if (error.code === 'P2025') {
            console.log(error.message)

            return res.status(404).json({
                message: "Publicação não encontrada para ser atualizada."
            })
        }

        next(error)
    }
}