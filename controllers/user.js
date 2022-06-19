exports.home=(req,res)=>{
    res.status(200).json({
        message:"Hello World",
        error:"Hello Error"
    })

}