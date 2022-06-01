export function queryGetId(req,res,model){
    const id=req.params.id;
    const query=model.find(m => m.id == id)
    if(!query){
        res.status(404).json({
            message: 'Model not found'
        })
        
        return;
    }
    res.json(query)
}


export function paginatedResults(model) {
    // middleware function
    return (req, res, next) => {
        const page = parseInt(req.query.page);
        const limit =5;
     
        // calculating the starting and ending index
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const results = {};
        if (endIndex < model.length) {
            results.next = {
                page: page + 1,
                limit: limit
            };
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            };
        }

        results.results = model.slice(startIndex, endIndex);

        res.paginatedResults = results;
        next();
    };
}