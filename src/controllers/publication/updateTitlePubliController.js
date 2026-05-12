import { updatePublication, validatePublication } from "../../models/publicationModel.js";

export async function updateTitlePubliController(req, res){
    try {
        const {id} = req.params
        const publication = req.body

        const {success, error, data} = validatePublication({id: +id, title: publication.title}, {description: true, authorId: true})

        if (!success) {
            return res.status(400).json({
                message: "Erro de validação",
                fieldErrors: error
            })
        }

        const result = await updatePublication(data, data.id)

        return res.json({
            message: "Título da publicação atualizado com sucesso!",
            user: result
        })
    } catch(error) {

        if (error.code === 'P2025') {
            console.log(error.message)

            return res.status(404).json({
                message: "Publicação não encontrada para atualizar o seu título."
            })
        }

        next(error)
    }
}