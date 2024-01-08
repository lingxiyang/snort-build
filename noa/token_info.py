import time
import requests
# 导入selenium包
from selenium import webdriver
from selenium.webdriver.common.by import By
def price_info():
    option = webdriver.ChromeOptions()
    option.add_argument(argument='--headless')      # 无界面模式

    option.add_argument('--no-sandbox')    # 以最高权限运行
    # 打开Firefox浏览器
    browser = webdriver.Chrome(options=option)
    # 停留三秒
    browser.get("https://mainnet.nostrassets.com/#/account")
    time.sleep(4)
    # 通过id属性获取搜索输入框
    table_account = browser.find_element(By.CLASS_NAME, "ant-table-tbody")

    rows =table_account.find_elements(By.TAG_NAME,"tr")
    assets = []
    for row in rows[1:]:
        columns = row.find_elements(By.TAG_NAME,"td")
        asset = {}
        asset['symbol'] = columns[0].text
        price_text = columns[2].text.split("\n")
        asset['price'] = price_text[0]
        asset['dollar'] = "-1"
        if len(price_text) > 1:
             asset['dollar'] = price_text[1].replace("≈$","")
        assets.append(asset)
    # 关闭浏览器
    browser.quit()
    return assets

def token_list():
    url = "https://market-api.nostrassets.com/assets/api/getTokenList"
    headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
    result = requests.post(url,headers=headers)
    if result.status_code == 200:
        return result.json().get("data")
    return None



