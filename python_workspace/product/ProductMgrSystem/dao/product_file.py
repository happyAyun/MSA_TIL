import os.path
from entity.product import Product

def init_data_load(): # 객체를 list에 담아서 return.
    products = []
    fileExist = os.path.isfile("product.dat") # os.path
    if fileExist :
        read_file = open("product.dat","r") # file open
        while True: # while 위치선정 당연히 data 위에죠~
            data = read_file.readline() 
            if len(data.split(" ")) > 1:
                product = data.split(" ")
                products.append(Product(product[0].strip(),product[1].strip(),product[2].strip(),product[3].strip())) # 객체의 생성자를 통해서 객체화 하여 list에 저장.
            if not data :
                break
        read_file.close() # file 닫기를 잊지 말기
    return products

def save_list(products):
    write_file = open("product.dat","w")
    for product in products:
        write_file.write("{0} {1} {2} {3}\n".format(product.id,product.name,product.price,product.description)) 
        # .dat파일과 함께 확인해보기 (O)
    write_file.close()
    
# 해당 객체의 __str__방식으로 읽고 쓰는 것.
