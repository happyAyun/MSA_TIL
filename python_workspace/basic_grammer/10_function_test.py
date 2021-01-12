# def 함수명([argumentlist]) : 
#       구현
#       [return data]

# 함수는 정의 --> 함수 호출
# 함수 호출 시 정의된 함수의 argumentlist에 맞도록 데이터 전달.
# 가변 매개변수(*argumentlist) 사용 시 호출 시마다 argumentlist가 다를 수 있다.
# 기본 매개변수(argument = 값) argument 기본값 설정 가능 => 호출 시 argument 생략 가능.

# 함수 정의
def print_3_times(*values, data='test') :
    for value in values:
        print("{0} : hello function {1}".format(value, data))
print()

# 함수 호출
print_3_times('test1')
print_3_times('test1','test2')
print_3_times() # 아무런 값도 출력하지 않음.
print_3_times('test1','test2', data='test10')

def argument_test(a, b=20, c=30) :
    print("{0} : {1} : {2}".format(a,b,c))

argument_test(10) # b.c는 기본값 => 10 : 20 : 30
argument_test(b=200,c=300,a=100) # 순서 상관없이 변수에 값 매핑 => 100 : 200 : 300
argument_test(1000, 2000, 3000) # 순서대로 매핑 => 1000 : 2000 : 3000

def return_none_test() :
    return                 # return : function 종료 - 호출한 곳으로 되돌아감.

print(return_none_test()) # return data가 없을 경우 None

def return_test(a,b):
    sum = a+b
    return sum

print(return_test(10,20))

#전달되는 가변 매개변수 곱해서 리턴하기
def mul(*values):
    result = 1
    for value in values :
        result *= value
    return result

print(mul(5,7,9,10))


#tuple : 값 변경하지 않는 list => tuple변수 = (value, value, ...)
tuple_data = (10,20,30,40,50) #cf
list_data = [10,20,30,40,50]

for tdata in tuple_data :
    print(tdata, end=" ")
print()
for ldata in list_data :
    print(ldata, end=" ")
print()
list_data[0]=100
print(list_data[0]) # list는 인덱스로 변경 가능함.
# tuple_data[0]=100 # Type error : 값 변경할 수 없음.

#tuple : function 에서 다수의 데이터 리턴시 사용.
def test_tuple() :
    return (10,20)

a,b = test_tuple()
print("{0} + {1} = {2}".format(a,b,a+b))
a = 30    # a값 변경 가능. 
print("{0} + {1} = {2}".format(a,b,a+b))

# 람다 : lamda argumentlist : return   => 1회성 익명함수
list_input = [1,2,3,4,5]
output_list = map(lambda data:data*data, list_input)
print(list_input)
print(output_list) # 주소값이 출력됨.
print(list(output_list)) # 리스트 값을 출력할 때 list() 함수를 이용.

output_filter = filter(lambda data: data<=3 , list_input)
print(list_input)
print(output_filter)
print(list(output_filter))