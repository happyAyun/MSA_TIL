from controller.product_controller import ProductController
from view.view import menu_display, menu_select, message_display
from view.view import input_display, update_display, remove_display, allRemove_display

controller = ProductController() 
# ProductController클래스의 내부함수를 사용하기 위해 새로운 객체 controller 생성

controller.file_read()
while True:

    menu_display()
    menu = menu_select()

    if menu == "1":
        product = input_display()
        controller.register(product)

    elif menu == "2":
        controller.getAllSchedule()

    elif menu == "3":
        (id,price) = update_display()
        controller.update(id,price)

    elif menu == "4":
        id = remove_display()
        controller.remove(id)
    
    elif menu == "5":
        check = allRemove_display()
        controller.allRemove(check)

    elif menu == "0":
        controller.file_write()
        message_display("시스템을 종료합니다.")
        break

    else : message_display("잘못입력하셨습니다. 올바른 메뉴를 선택하여 주세요.")

