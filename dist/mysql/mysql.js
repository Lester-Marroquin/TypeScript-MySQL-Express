"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
        console.log("Clase inicializada");
        this.cnn = mysql.createConnection({
            host: "localhost",
            user: "node_user",
            password: "123456",
            database: "mydb",
        });
        this.conectarDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (err, res, field) => {
            if (err) {
                console.log('Error en Query');
                console.log(err);
                return callback(err);
            }
            if (res.length === 0) {
                callback('El registro solicitado no existe');
            }
            else {
                callback(null, res);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log("Base de datos Online");
        });
    }
}
exports.default = MySQL;
