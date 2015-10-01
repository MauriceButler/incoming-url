var url = require('url');

function getIncommingUrl(request) {
    var forwardedProtocol = request.headers['x-forwarded-proto'] || '',
        secure = request.connection.encrypted || forwardedProtocol.toLowerCase() === 'https',
        protocol = secure ? 'https' : 'http',
        host = request.headers.host || request.connection.remoteAddress;

    return url.parse(protocol + '://' + host + request.url, true);
}

module.exports = getIncommingUrl;
