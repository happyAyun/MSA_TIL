# import test_module as test # ModuleNotFoundError

# import test_package.test_module as test
# import test_package.test_module2 as test2

from test_package import * 
# __init__ 의 __all__ = [] 안에 들어있는 list가 로드 된다.
# from  import 는 __init__.py 파일이 있어야 한다.
#모듈의 __name__ 출력하기#
# test_package.test_module

radius = test_module.number_input()
print(test_module.get_circumference(radius))
print(test_module.get_circle_area(radius))

x,y = test_module2.number_input()
print(test_module2.get_circumference(x,y))
print(test_module2.get_rectangle_area(x,y))

print("#메인의 __name__ 출력#")
print(__name__) # __main__ : start한 곳
print()