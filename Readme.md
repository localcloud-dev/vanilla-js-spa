# Vanilla JS SPA (Single Page Application) Starter Kit

This repo shows how to build SPAs (Single Page Applications) without any frontend frameworks or other dependencies. It means that apps based on this approach will work as long as web browsers support HTML, JS modules, and CSS without any changes. Develop today, run even 10 years later.

If you know JS, you can start developing your app without studying any docs. Just read the "How to Use" section.

**Don't forget to star the project if you like it.**

## Advantages

- Can be deployed anywhere, even services that host only static websites
- Zero dependencies
- No build required
- Unbelievably fast
- Very lightweight
- You fully understand how it works

## How to Use

To run this project, you need a web server like any static website/SPA. The easiest way to run a local webserver is to use Node.js and "http-server":

- Install Node.js and NPM - https://nodejs.org/en/download/package-manager/

- Install "http-server" - https://github.com/http-party/http-server
```
sudo npm install --global http-server
```

- Clone this repository and start the web server
```
git clone https://github.com/localcloud-dev/vanilla-js-spa.git
cd vanilla-js-spa
http-server  --proxy http://localhost:8080?
```
We use "--proxy http://localhost:8080?" to redirect all requests to http://localhost:8080/* to the home page (index.html in our case) to enable full client-side routing. It means that all pages (localhost:8080/blog, localhost:8080/page1, etc.) are handled by main.js.

- Open it in your browser at http://localhost:8080

## How to Deploy

You can deploy a project based on this template with [TurboCloud](https://github.com/localcloud-dev/turbo-cloud) anywhere (VPS/cloud servers/dedicated servers) with just one command. Check out how to do that in the [TurboCloud docs](https://github.com/localcloud-dev/turbo-cloud?tab=readme-ov-file#how-to-deploy-static-websites).

## License

MIT