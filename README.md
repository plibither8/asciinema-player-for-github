# <img src="assets/icon.png" width="45" align="left"> asciinema Player for GitHub

[![Chrome Webstore Version](https://img.shields.io/chrome-web-store/v/mkllmpcfhjcbkmegdpnaemhpdddffhil.svg)](https://chrome.google.com/webstore/detail/asciinema-player-for-gith/mkllmpcfhjcbkmegdpnaemhpdddffhil)
[![Chrome Webstore Users](https://img.shields.io/chrome-web-store/users/mkllmpcfhjcbkmegdpnaemhpdddffhil.svg)](https://chrome.google.com/webstore/detail/asciinema-player-for-gith/mkllmpcfhjcbkmegdpnaemhpdddffhil)
[![Licence](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[![Made_with_love_in India](https://madewithlove.org.in/badge.svg)](https://madewithlove.org.in/)

> Automatically detect instances of [asciinema](https://asciinema.org) links in a README on GitHub and embed the player in its place.

This is a lightweight Chrome extension. Instead of being directed to the asciinema website to watch the "asciicast", watch it directly in the README (or any `.md`, `.rst`, `.textile`, [etc.](https://github.com/github/markup/blob/master/README.md#markups) file), thanks to the [embedded player widget](https://asciinema.org/docs/embedding). 🎉

<a href='https://chrome.google.com/webstore/detail/asciinema-player-for-gith/mkllmpcfhjcbkmegdpnaemhpdddffhil?utm_campaign=PartBadge'><img alt='Get it on the Chrome Webstore' src='https://developer.chrome.com/webstore/images/ChromeWebStore_BadgeWBorder_v2_206x58.png' height="58px"/></a>

![Demo](assets/demo.gif)

### Content Security Policy Modification

**Just FYI:** to allow third-party `iframe`s (in this case, from `asciinema.org`) to be rendered on github.com, the Content-Security-Policy (CSP) in the response headers of github.com are modified by this extension. The following modification takes place:

> Before: `frame-src render.githubusercontent.com;`
>
> After: `frame-src asciinema.org render.githubusercontent.com;`

For more details: [Content Security Policy (CSP) - Google Chrome](https://developer.chrome.com/extensions/contentSecurityPolicy)

Code: [background.js](src/background.js)

---

## License

Copyright (c) Mihir Chaturvedi. All rights reserved.

Licensed under the [MIT](LICENSE) License.
