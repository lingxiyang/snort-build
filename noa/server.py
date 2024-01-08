import web
import json
from db import get_token_info

urls = (
    '/', 'token'
)

app = web.application(urls, globals())

class token:
    def GET(self):
        web.header("Access-Control-Allow-Origin", "*")
        web.header('Content-Type', 'application/json')
        r = get_token_info()
        return json.dumps(r)

if __name__ == "__main__":
    app.run()