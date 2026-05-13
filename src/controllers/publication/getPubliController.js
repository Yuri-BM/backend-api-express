import { getPublications } from "../../models/publicationModel.js"

export async function getPubliController(req, res){
    
    const {title} = req.query

    const result = await getPublications(title)

    return res.json({
        message: "Publicações listadas com sucesso!",
        publications: result
    })
}