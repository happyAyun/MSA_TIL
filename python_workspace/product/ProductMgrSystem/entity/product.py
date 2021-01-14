class Product:
    def __init__(self,id,name,price,description):
        self.id = id
        self.name = name
        self.price = price
        self.description = description

    def __str__(self):
        return "제품번호:{0} 제품명:{1} 가격:{2} 제품소개:{3}".format(self.id,self.name,self.price,self.description)

    def __eq__(self,id):
        if self.id == id:
            return True
        else:
            return False


