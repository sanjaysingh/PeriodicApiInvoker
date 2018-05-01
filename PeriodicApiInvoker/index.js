const https = require('https');
const urls = ['https://mabservice.sanjaysingh.net/api/sanjay/smartping', 'https://mockapibuilder.sanjaysingh.net', 'https://sasapp.sanjaysingh.net'];


function makeHttpGetCall(url, context) {
    https.get(url, (resp) => {
        resp.on('data', (chunk) => {
            // ignore data
        });
        resp.on('end', () => {
            context.log('Success: ' + url);
        });
 
    }).on("error", (err) => {
        context.log('Error: '+ url + '\r\n' + err);
    });
}


module.exports = function(context) {
    context.log('Function is called');
    urls.forEach(url => {
        makeHttpGetCall(url, context);
    });
};