var config;
if (process.env.NODE_ENV === 'production') {
    console.log("Load mysqlconfig productionConfig...");
    config = {
        "host": "localhost",
        "port": "3306",
        "user": "root",
        "password": "lykmysql1",
        "database": "first"
    };
} else {
    console.log("Load mysqlconfig localConfig}...");
    config = {
        "host": "localhost",
        "port": "3306",
        "user": "root",
        "password": "lykmysql1",
        "database": "first"
    }
}

module.exports = config;
