hello=" Hello Python " # 문자열 배열 : 0 ~ len()-1
num_string=input("숫자 입력 : ")

print(hello[2:3]) # index : 2부터 ~ (3-1) 까지
print(hello[-3:-1]) # index -1은 맨 마지막 인덱스를 가리키고 왼쪽방향으로 +1을 함.(첫번째 인덱스는 '-배열의 크기')
print(len(hello)) # 문자열 길이
print("문자열 '안녕하세요' 길이는 {0} 입니다." .format(len(hello))) # 문자열 형식 지정 IndexError 주의

print(hello.upper())
print(hello.lower())
print(hello.strip())

print("{0}이 숫자인가? {1}" .format(num_string, num_string.isdecimal()))
if num_string.isdecimal(): num1 = 10+int(num_string)
print(num1)

print("'l' 문자열 검색 ",hello.find("l"))   # 검색한 문자열 first index return
print("'l' 문자열 검색 ",hello.rfind("l"))  # 검색한 문자열 last index return
print("'1' 문자열 포함여부 ", ("l" in hello )) # 문자열 포함 여부 return

print(hello.split(" ")) # split token으로 문자열 나누어 list 리턴