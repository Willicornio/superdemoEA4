const Usuario = require('../models/usuarios');

const usuarioCtrl = {};


usuarioCtrl.getUsuarios =  async (req, res) => {

   const usuarios= await Usuario.find();
   res.json(usuarios);
}

usuarioCtrl.createUsuario = async (req, res) => {

    const user = new Usuario({

        id: req.body.id,
        name: req.body.name,
        pass: req.body.pass,
        info: req.body.info

    });
      await user.save();
    res.json({

        status: "200"
    });
};

usuarioCtrl.getUsuario = async(req, res)=>{
 console.log(req.params);
 try{
     const user = await Usuario.findById(req.params.id);
    res.json(user);
 }
 catch
  {res.json({status: '404'});}
};

usuarioCtrl.editUsuario =  async (req, res) => {
    try{
    const { id } = req.params;
    const user = {
        id: req.body.id,
        name: req.body.name,
        pass: req.body.pass,
        info: req.body.info
    };
    await Usuario.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: '200'});
}
catch{
    res.json({status: '404'});
}
};

usuarioCtrl.login = async (req, res) => {

    try{
  const user = await Usuario.find({name : req.body.name, pass : req.body.pass});
    
    res.json(user);
    }
    catch
    {res.json({status: '200'});}
};


usuarioCtrl.deleteUsuario =  async (req, res) => {
    try{
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({status: '200'});
}
catch
{res.json({status: '404'});}
};

module.exports = usuarioCtrl; 
