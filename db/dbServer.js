const mysql = require('mysql');
const wrapper = require('co-mysql');
const mysqlConfig = require('../config/mysql');

class mysqlClient {
    constructor() {
        this.createConnect();
    }
    /**
     * 创建数据库连接
     */
    createConnect() {
        const pool = mysql.createPool(mysqlConfig);
        this.p = wrapper(pool);
    }
    /**
     * 关闭数据库连接
     */
    closeConnect() {
        // this.connection.end();
    }
    /**
     * 数据库查询接口
     * @param  {[type]} table   数据库表名
     * @param  {[type]} columns 需要查询的数据列
     * @param  {[type]} sql     查询条件
     */
    query(table, columns, sql) {
        var oThis = this;
        var querySql = 'SELECT ' + columns + ' from ' + table;
        if (sql) {
            querySql = querySql + ' where ' + sql;
        }
        return this.p.query(querySql);

    }

}

module.exports = mysqlClient;
