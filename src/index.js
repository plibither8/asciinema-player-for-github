const IMAGES = document.querySelectorAll('article.markdown-body img');

for (const image of IMAGES) {
	const imageSrc = new URL(image.dataset.canonicalSrc);

	if (imageSrc.hostname !== 'asciinema.org') {
		continue;
	}

	const imageAnchorEl = image.parentNode;
	const castId = imageSrc.pathname.split('/a/')[1].split('.')[0];

	const playerScript = document.createElement('script');
	const scriptSrc = `https://asciinema.org/a/${castId}.js`;
	const scriptId = `asciicast-${castId}`;
	playerScript.setAttribute('src', scriptSrc);
	playerScript.setAttribute('id', scriptId);
	playerScript.setAttribute('async', true);

	imageAnchorEl.parentNode.replaceChild(playerScript, imageAnchorEl);
}