from db import insert_token,get_token_info,update_price
from token_info import token_list,price_info
import time
while True:
    tokens = token_list()
    prices = price_info()
    for t in tokens:
        symbol = t["symbol"]
        token = get_token_info(symbol)
        if token is None or len(token) ==0:
            insert_token(t)
    for p in prices:
        update_price(p["symbol"],p["price"],p["dollar"])
    time.sleep(300)