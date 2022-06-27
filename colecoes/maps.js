function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins

}
const usuarios = new Map();

usuarios.set('Ingrid', 'Admin');
usuarios.set('Emanuelle', 'Admin');
usuarios.set('Nicole', 'User');

console.log(getAdmins(usuarios))