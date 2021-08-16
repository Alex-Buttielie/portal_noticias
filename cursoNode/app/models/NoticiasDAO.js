function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    var query = 'select * from noticias';
    this._connection.query(query, callback);

}

NoticiasDAO.prototype.getNoticia = function(callback){
    var query = 'select * from noticias where id_noticias = 24';
    this._connection.query(query, callback);

}

NoticiasDAO.prototype.salvarNoticias = function(noticia, callback){
    var query = "insert into noticias (titulo, noticia) values ('" +   noticia.titulo + "','" + noticia.noticia + "')";
    this._connection.query(query, callback);
}

module.exports = function () {
        return NoticiasDAO;
}