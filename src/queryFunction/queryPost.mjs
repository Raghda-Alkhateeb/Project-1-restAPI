export function resPost(req,res,model){
    model.push(req.body);
    res.json(model);
    res.status(201).send();
}
export function bookPost(req,res,authors) {
    if (req.body.pages < 50) {
        res.status(403).json({
            message: 'pages  should not be less than 50'
        })
        return;
    }
    else if (req.body.isbn[0] == 0 || req.body["isbn"].length != 10) {
        res.status(403).json({
            message: "isbn rejected "
        });
        return
    }
    //author ID
    const id = req.body.authorId;
    const author = authors.find(a => a.id == id)
    if (!author) {
        res.status(404).json({
            message: 'Author not found'
        })
        return;
    }
    //langauge
    else if (req.body.language == undefined) {
        res.status(404).json({
            message: 'Languge  not found'
        })
        return

    }
    else {
        let language = req.body.language
        const lang = (language == 'en') ? "English" : (language == "ar") ? "Arabic" :
            res.status(403).json({
                message: 'Languge must be "en"as English or "ar"as Arabic'
            })
        console.log(lang)

    }
    let result = "Ok"
    return result

}
