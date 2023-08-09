import mysql = require("mysql");

export default class MySQL {
  private static _instance: MySQL;

  cnn: mysql.Connection;
  conectado: boolean = false;

  constructor() {
    console.log("Clase inicializada");
    this.cnn = mysql.createConnection({
      host: "localhost",
      user: "node_user",
      password: "123456",
      database: "mydb",
    });
    this.conectarDB();
  }

  public static get instance(){
    return this._instance || ( this._instance = new this());
  }

  static ejecutarQuery( query: string, callback: Function) {

    this.instance.cnn.query(query, (err: any, res: Object[], field: any) => {
      if (err) {
        console.log('Error en Query');
        console.log(err);
        return callback( err );
      }

      if (res.length === 0) {
        callback( 'El registro solicitado no existe' )
      } else {
        callback( null, res );
      }
      
    })
  }

  private conectarDB() {
    this.cnn.connect((err: mysql.MysqlError) => {
      if (err) {
        console.log(err.message);
        return;
      }
      this.conectado = true;
      console.log("Base de datos Online");
    });
  }
}
