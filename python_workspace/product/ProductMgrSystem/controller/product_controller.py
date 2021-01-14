from service.product_service import ProductService
 # class전체를 import해주면 그 안의 메소드와 변수를 사용할 수 있다.
from view.view import list_display, message_display

class ProductController :
    
    service = ProductService() # 전역변수도 될까???? (O) 가능. 오류없음.

    def register(self,product):
        message = self.service.register(product)
        message_display(message)

    def getAllSchedule(self):
        products = self.service.getAllSchedule()
        list_display(products) # message 출력이 아니라 products의 product를 출력하는 메소드.

    def update(self, id,price):
        if id == "" or price == "": # 입력이 되지 않았을 경우를 체크해야 한다.
            message_display("제품번호와 제품가격을 모두 입력하여 주세요.")
        message = self.service.update(id,price)
        message_display(message)

    def remove(self, id):
        if id == "":
            message_display("제품번호를 입력하세요.")
        message = self.service.remove(id)
        message_display(message)

    def allRemove(self,check):
        message = self.service.allRemove(check)
        message_display(message)

    def file_read(self):
        self.service.file_read()

    def file_write(self):
        self.service.file_write()



