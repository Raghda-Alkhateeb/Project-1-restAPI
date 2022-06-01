export function queryDelete(req,res,model){
    
    for (let i = 0; i < model.length; i++) {
        if (model[i].id == id) {
            model.splice(i, 1)
            res.status(200).json();    
            return
        }
    }
    res.status(404).json({
        message: 'Model not found'
    })
}
