var config;
// export NODE_ENV=production
if (process.env.NODE_ENV === 'production') {
    console.log("Load config productionConfig...");
    config = {
        "view_path" : '/views-ejs'
    };
} else {
    console.log("Load config localConfig}...");
    config = {
        "view_path" : '/views-ejs'
    }
}

module.exports = config;
