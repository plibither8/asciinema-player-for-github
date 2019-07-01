browser.webRequest.onHeadersReceived.addListener(info => {
	const headers = info.responseHeaders;
	for (const [i, header] of headers.entries()) {
		if (header.name.toLowerCase() === 'content-security-policy') {
			headers[i].value = headers[i].value.replace('frame-src', 'frame-src asciinema.org');
			break;
		}
	}

	return {
		responseHeaders: headers
	};
}, {
	urls: ['<all_urls>'],
	types: ['main_frame']
}, ['blocking', 'responseHeaders']);
