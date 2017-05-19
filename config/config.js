var config;
// export NODE_ENV=production
if (process.env.NODE_ENV === 'production') {
    console.log("Load config productionConfig...");
    config = {
        "view_path" : '/dist',
        "static_path" : '/dist'
    };
} else {
    console.log("Load config localConfig}...");
    config = {
        "view_path" : '/views-ejs',
        "static_path" : '/public'
    }
}

module.exports = config;
