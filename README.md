# 🎬 asciinema Player for GitHub

> Automatically detect instances of [asciinema](https://asciinema.org) links in a README on GitHub and embed the player in its place.

This is a lightweight Chrome extension. Instead of being directed to the asciinema website to watch the "asciicast", watch it directly in the Readme, thanks to the [embedded player widget](https://asciinema.org/docs/embedding). 🎉

![Demo](assets/demo.gif)

### Content Security Policy Modification

**Just FYI:** to allow third-party `iframe`s (in this case, from `asciinema.org`) to be rendered on github.com, the Content-Security-Policy (CSP) in the response headers of github.com are modified by this extension. The following modification takes place:

Before: `frame-src render.githubusercontent.com;`

After: `frame-src asciinema.org render.githubusercontent.com;`

For more details: [Content Security Policy (CSP) - Google Chrome](https://developer.chrome.com/extensions/contentSecurityPolicy)

Code: [background.js](src/background.js)

---

## License

Copyright (c) Mihir Chaturvedi. All rights reserved.

Licensed under the [MIT](LICENSE) License.
