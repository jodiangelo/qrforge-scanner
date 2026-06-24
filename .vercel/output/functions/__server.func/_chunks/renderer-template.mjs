import { b as HTTPResponse } from "../_libs/h3.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
const rendererTemplate = () => new HTTPResponse('// index.html\r\n<!DOCTYPE html>\r\n<html>\r\n  <head>\r\n    <meta charset="UTF-8" />\r\n    <title>QR Scanner</title>\r\n  </head>\r\n  <body>\r\n    <div id="root"></div>\r\n    <script type="module" src="/src/main.tsx"><\/script>\r\n  </body>\r\n</html>', { headers: { "content-type": "text/html; charset=utf-8" } });
function renderIndexHTML(event) {
  return rendererTemplate(event.req);
}
export {
  renderIndexHTML as default
};
