export function resPut(req,res,model){
    const id = req.params.id;
    for (let i = 0; i < model.length; i++) {
        if (model[i].id == id) {
            model[i] = req.body;
            res.json(model);
            res.status(200).json();
            return
        
        }}
    
    
    res.status(404).json({
        message: 'model not found'
      });
    
}