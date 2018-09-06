const http = require("http");
const url = require("url");
const query = require('querystring');
const fshelper = require("./fs-helper");

const params = process.argv.slice(2);

const listener = async (request, response) => {

    const urlValue = url.parse(request.url);
    const queryValue = query.parse(urlValue.query);

    if ((urlValue.pathname === "/") || (urlValue.pathname.endsWith(".html"))) {

        let html = await fshelper.readHtml("./template.html");

        const files = await fshelper.readFolder("../images");

        let images = "";
        for (let index = 0; index < files.length; index++) {
            const element = files[index];

            images += `<li><a href="/${element}">${element}</a></li>`;
        }
        html = html.replace("%%corgies%%", images);

        response.write(html);
    } else if (urlValue.pathname.endsWith(".jpg")) {
        const imageData = await fshelper.readImage(`../images${urlValue.pathname}`);
        response.write(imageData);
    } else {
        response.write("not supported");
    }
    response.end();
};


const server = http.createServer(listener);
const port = params[0] || 8081;

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
