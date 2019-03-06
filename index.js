const express = require('express');
const app = express();
const xml = require('xml');

// This is a test XML
app.get('/', function (req, response) {
    response.set('Content-Type', 'text/xml');
    response.send(xml([
        {
            'Response': [
                // Attributes here
                {},
                // Children here
                {
                    'Jump': [
                        {
                            _attr: {
                                'context': 'Welcome',
                                'option': '0',
                                'priority': '1'
                            }
                        }
                    ]
                }
            ]
        }
    ], true));
});

app.listen(3001);