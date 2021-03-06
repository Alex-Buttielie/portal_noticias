function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    var query = 'select * from noticias  order by data_criacao desc';
    this._connection.query(query, callback);

}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    var query = 'select * from noticias where id_noticias = ' + id_noticia.id_noticia;
    this._connection.query(query, callback);

}

NoticiasDAO.prototype.salvarNoticias = function (noticia, callback) {
    var query = "insert into noticias (titulo, noticia, resumo, nome_autor, data_noticia) values ('"
        + noticia.titulo + "','" + noticia.noticia + "','"
        + noticia.resumo + "','" + noticia.nome_autor + "','" + noticia.data_noticia + "')";


    this._connection.query(query, callback);
}

NoticiasDAO.prototype.getCincoUltimasNoticias = function(callback){
    this._connection.query('select * from noticias order by id_noticias desc limit 5', callback);
}

module.exports = function () {
    return NoticiasDAO;
}