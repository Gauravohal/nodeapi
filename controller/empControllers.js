function empTestController(req,res){
    res.send("controller working")
}

function empLoginController(req,res){
    res.send("Login success")
}

module.exports = {
    empTestController,
    empLoginController
}