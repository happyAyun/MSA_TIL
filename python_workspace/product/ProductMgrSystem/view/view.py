# from controller.product_controller import ProductController 
# controller의 import는 필요없다.
# main을 통해 연결된다.
# entity가 필요.

from entity.product import Product 
# input을 통해 사용자로부터 받은 데이터를 객체화 시켜 controller에게 넘기기 위해서 entity.product의 클래스 Product를 import함. 

def message_display(message):
    print(message)

def menu_display():
    print("====== <메뉴> ======")
    print("1. 제품 등록")
    print("2. 제품 목록 보기")
    print("3. 제품 가격 변경")
    print("4. 제품 삭제")
    print("5. 제품 전체 삭제")
    print("0. 시스템 종료")

def menu_select():
    menu = input("메뉴를 입력하세요 : ")
    return menu

def input_display():
    print("====== 제품 등록 ======")
    id = input("제품 번호를 입력하세요 : ")
    name = input("제품 이름 입력하세요 : ")
    price = input("제품 가격 입력하세요 : ")
    while not price.isdecimal(): # while절로, 변수.isdecimal()
        print("제품의 가격을 숫자로 입력해주세요.")
        price = input("제품 가격 입력하세요 : ")
    description = input("제품 소개 입력하세요 : ")
    return Product(id,name,int(price),description) # 생성자로 객체화함.

def list_display(products):
    print("====== 제품 목록 보기 ======")
    for product in products:
        print(product) # __str__ 재정의에 의해.

def update_display():
    print("====== 제품 가격 변경 ======")
    id = input("변경할 제품 번호를 입력하세요 : ")
    price = input("변경할 제품 가격을 입력하세요 : ")
    while not price.isdecimal():
        print("제품의 가격을 숫자로 입력해주세요.")
        price = input("변경할 제품 가격을 입력하세요 : ")
    return (id,price)

def remove_display():
    print("====== 제품 삭제 ======")
    id = input("삭제할 제품 번호를 입력하세요 : ")
    return id

def allRemove_display():
    print("====== 제품 전체 삭제 ======")
    check = input("제품을 모두 삭제하시겠습니까? [y/n] : ")
    return check

