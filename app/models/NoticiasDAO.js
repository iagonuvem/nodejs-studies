/**
 * Orientação a objetos no JS, note que não é definido como 'class'
 * e sim uma função
 */
function NoticiasDAO(conn){
    //Atributos da classe
    this._conn = conn;
}
/**
 * Note que as funções da "classe" Noticia não estão nescessariamente dentro
 *  da classe, é utilizado o metodo "prototype", que significa que essa função
 * é um atributo da classe "Noticias"
 */
NoticiasDAO.prototype.getNoticias = function(callback){
    this._conn.query("SELECT * FROM noticias ORDER BY data_criacao DESC", callback);
};

NoticiasDAO.prototype.getNoticia = function(query, callback){
    this._conn.query("SELECT * FROM noticias WHERE id_noticia="+query.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    this._conn.query("INSERT INTO noticias set ? ", noticia , callback);
};

NoticiasDAO.prototype.get5LastNoticias = function(callback){
    this._conn.query("SELECT * FROM noticias ORDER BY data_criacao DESC LIMIT 5", callback);
};

module.exports = function(){
    return NoticiasDAO;
}