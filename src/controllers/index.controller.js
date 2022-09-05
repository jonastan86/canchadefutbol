const { User } = require('../database/models/index');
const { cancha } = require('../database/models/index');

const sequelize = require('sequelize');

const index = async (req,res) => {
    let usuario = await User.findAll();
    let campo = await cancha.findAll()
    return res.render('../src/views/usuario/index', {usuario,campo});
};

const usuarios = async (req,res) => {
    let usuario = await User.findAll();
    return res.render('../src/views/usuario/usuarios',{usuario});
}


const show = async (req,res) => {
    const id = req.params.id
    let elemento = await User.findOne({ where: { id: id } });//metodo findOne me trae un solo id
    return res.render('../src/views/usuario/show', {elemento});
};

const edit = async (req,res) => {
    const id = req.params.id
    let elemento = await User.findOne({ where: { id: id } });
    return res.render('../src/views/usuario/edit', {elemento});
};

const create = async (req,res) => {
    return res.render('../src/views/usuario/create');
};


//*************ESTADIOS*****************//
const createstadio = async (req,res) => {
    return res.render('../src/views/estadio/createstadio');
};

const estadios = async (req,res) => {
    let campo = await cancha.findAll();
    return res.render('../src/views/estadio/estadios',{campo});
};


//*********************API************ */

const store = async (req,res) => {
    const params = req.body;
    let user = await User.create(params)//trae un json y crea un user con esos parametros
    if (user) {
        return res.status(200).json({'status':200, user,'msg':'Creado correctamente'})
       
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};

const storestadio = async (req,res) => {
    const params = req.body;
    let estadio = await cancha.createstadio(params)//trae un json y crea un user con esos parametros
    if (estadio) {
        return res.status(200).json({'status':200, estadio,'msg':'Creado correctamente'})
    
    } else {
        return res.status(404).json({'msg':'No se recibieron los datos'})
    }
};


const update = async (req,res) => {
    const params = req.body;//requerimos los parametros
    const id = req.params.id;//requerimos el id
    let user = await User.findByPk(id);// pasamos el User con la primary Key(findByPk) correspondiente
    if (user) {
       user.nombre = params.nombre;
       user.apellido = params.apellido;
       user.password = params.password;
       user.email = params.email;
       user.telefono = params.telefono;
        user.save().then(user => {//guardamos (save) si se logró editar
          res.status(201).json({status:201,user, 'msg':'Editado correctamente'})
        })
    } else {
        return res.status(404).json({msg:"Usuario no encontrado"})
    }
};

const destroy = async (req,res) => {
    const id = req.params.id;
    let user = await User.findByPk(id);
    if (!user) {// si no encontramos user 
        return res.status(404).json({msg:"Usuario no encontrado"})
    } else {
        user.destroy().then(user => {
       
          return res.status(200).json({'status':200,user, 'msg':'Eliminado correctamente'})
        })
    }
};

const policy = async (req, res, next) => {
    let user = await User.findOne({ where: { id: req.params.id } });
    if (user.role == 'admin'){
      req.isAdmin = true;
      next()
    } else {
      res.status(401).json({msg:"No autorizado"})
    }
  };

module.exports = {
    index,
    create,
    storestadio,
    createstadio,
    show,
    usuarios,
    estadios,
    edit,
    store,
    destroy,
    update,
    
    policy
};