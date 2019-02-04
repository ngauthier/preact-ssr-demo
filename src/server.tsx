import * as express from 'express';
import { h } from 'preact';
import { render } from 'preact-render-to-string';
import App from "./App";

const app = express();
app.listen(8080);

app.use(express.static('dist'))

app.get('/', (req, res) => {
	let html = render(<App />);
	res.send(`<!DOCTYPE html><html><body><div id="root">${html}</div><script src="/bundle.js"></script></body></html>`);
});
