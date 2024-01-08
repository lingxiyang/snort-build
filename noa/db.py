import sqlite3
def get_token_info(symbol=None):
    conn = sqlite3.connect('price.db')
    cs = conn.cursor()
    sql = '''select 
                id,
                assetType, 
                chain,
                chainName,
                createTime,
                decimals,
                detail,
                modifyTime,
                name,
                reserve,
                symbol,
                token,
                totalSupply,
                volume,
                price,
                dollar
    from token_info'''
    if symbol is not None:
        sql = sql +" where symbol = '"+symbol+"'"
    cs.execute(sql)
    result = cs.fetchall()
    column_names = [i[0] for i in cs.description]  # 获取列名
    rows = []
    for row in result:
        rows.append({key: value for key, value in zip(column_names, row)})
    return rows

def update_token(data):
    pass
def insert_token(data):
    sql =''' 
           insert into token_info(
             id,
            assetType, 
            chain,
            chainName,
            createTime,
            decimals,
            detail,
            modifyTime,
            name,
            reserve,
            symbol,
            token,
            totalSupply,
            volume)values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)
         '''
    conn = sqlite3.connect('price.db')
    cs = conn.cursor()
    # data ={}
    cs.execute(sql,(data["id"],
        data["assetType"],
        data["chain"],
        data["chainName"],
        data["createTime"],
        data["decimals"],
        data["detail"],
        data["modifyTime"],
        data["name"],
        data["reserve"],
        data["symbol"],
        data["token"],
        data["totalSupply"],
         0 if data.get("volume") is None else data.get("volume")
        ))
    conn.commit()
    conn.close()

def update_price(symbol,price,dollar):
    sql = '''update token_info set price = ?,dollar=? where symbol = ? '''
    conn = sqlite3.connect('price.db')
    cs = conn.cursor()
    cs.execute(sql,(price,dollar,symbol))
    conn.commit()
    conn.close()
def create_table():
    conn = sqlite3.connect('price.db')
    cs = conn.cursor()
    sql ='''
         create table if not exists token_info(
            id  text ,
            assetType text, 
            chain int,
            chainName text,
            createTime text,
            decimals int,
            detail text,
            modifyTime text,
            name  text,
            reserve int,
            symbol  text,
            token text,
            totalSupply int,
            volume int,
            price  text,
            dollar text
            )
        '''
    cs.execute(sql)
    conn.commit()
    conn.close()
# create_table()
print(get_token_info())