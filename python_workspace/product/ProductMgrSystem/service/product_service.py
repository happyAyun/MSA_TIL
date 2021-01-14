from dao.product_file import init_data_load, save_list
from exception.duplicate_exception import DuplicateException
from exception.idnotfound_exception import IDNotFoundException

# from entity.product import Product -> view와 관련.
# 이건 그 전 우리가 import한 dao에서 import해서 객체화인스턴스를 만들고 그걸 이곳에 보냈음으로 필요가 없다. 즉, 계층적 연관이 없다. 

class ProductService :

    products=[]

    def register(self,product): # product의 형태로 들어오게 될 것임. 확인바람.(O) => view에서 생성자를 통해 객체화하여 controller에게 보내고 controller가 service에게 보낸 것이다. 따라서 view에서 entity의 Product import하는 것임.
        index = self.is_exist(product.id) # class.메소드!! self.is_exist()
        if index < 0:
            self.products.append(product) # list의 추가는 append이다!!
            return "{0} 제품이 새로 추가되었습니다.".format(product.name)
        else:
            try:
                raise DuplicateException(product.id)
            except DuplicateException as inputError:
                return str(inputError)

    def getAllSchedule(self):
        return self.products

    def update(self,id,price):
        index = self.is_exist(id)
        if index > -1:
            self.products[index].price = price
            return "{0}번 제품의 가격이 변경되었습니다.".format(id)
        else :
            try:
                IDNotFoundException(id)
            except IDNotFoundException as updateError:
                return str(updateError)


    def remove(self,id): # is_exist()를 이용해야 함.
        index = self.is_exist(id)
        if index > -1:
            self.products.pop(index) # 역시나 pop(index)
            return "{0}번 제품이 삭제되었습니다.".format(id)
        else : # try: raise , except Exception: return str() 
            try:
                raise IDNotFoundException(id) # error가 생성자에 의해 생성됨.
            except IDNotFoundException as removeError:
                return str(removeError) # 그 생성된 객체를 str로 형변환하여 (return)호출하여 보여줌.


    def allRemove(self,check):
        if check =='Y' or check =='y':
            self.products.clear()
            return "제품 정보가 모두 삭제되었습니다."
        else:
            return "삭제되지 않았습니다."

    def is_exist(self,id):
        for index,product in enumerate(self.products): # class안에 포함되어있는 변수나 메소드를 사용하려면 className.해당변수/메소드 => self.products, self.is_exist
            if product.id == id:
                return index
        return -1

    def file_read(self):
        self.products = init_data_load() # self.products~!!

    def file_write(self): # argument는 self만 필요~
        save_list(self.products)