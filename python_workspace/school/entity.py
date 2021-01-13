# self를 항상 넣어주어야 한다!
# 부모 class (Super Class) : attribute와 operation 자식 Class(Sub Class)에서 사용 허용(상속).

class Person :
    def __init__(self, id, name): # Person() : 생성자 호출 시 내부적으로 호출, 객체생성 시 초기화 구현
        self.id = id
        self.name = name            # {"id":id, "name":name}
    
    def info(self):                 # 객체 operation : meber method
        print("아이디:{0} 이름:{1} ".format(self.id,self.name), end=" ")

    # object 클래스의 __str__ 재정의
    def __str__(self):    
        return "아이디:{0} 이름:{1} ".format(self.id,self.name)

    # student == student2 출력되도록 __eq__ Override 해보기
    def __eq__(self,object):
        if self.id == object.id :
            return True
        else :
            return False

# Person의 Sub Class
class Student(Person) :
    staticVariable = 0 # 클래스 변수 : 객체생성하지 않고 클래스 이름으로 참조

    def __init__(self, id, name, major):  # 생성된 객체가 self가 됨(student, student2, ...)
        super().__init__(id, name)      # Super Class의 생성자 호출
        self.major = major

    # def student_info(self):
    def info(self): # Person info Override
        super().info()              # Super Class의 method 호출
        print("전공:{0} ".format(self.major))

    # __str__ 재정의 : Override
    def __str__(self):       # 다형성 : 재정의 가능, 자식에 메소드가 없다면 부모 메소드 호출, 있다면 자식 메소드 우선.
        return super().__str__() + "  전공:{0} ".format(self.major) 

    # @classmethod
    # def classMethod : # 클래스 이름.메서드 : Student.classMethod
    #     # 클래스가 메모리에 로드될 때 딱 한번 

class Teacher(Person) :
    def __init__(self, id, name, subject) :
        super().__init__(id, name)
        self.subject = subject

    # def teacher_info(self):
    def info(self): # Person info Override
        super().info()
        print("담당 과목:{0} ".format(self.subject))

    def __str__(self):       
        return super().__str__() + "  담당 과목:{0} ".format(self.subject)


class Employee(Person) :
    def __init__(self,id,name,department):
        super().__init__(id,name)
        self.department = department

    # def employee_info(self):
    def info(self): # Person info Override
        super().info()
        print("부서:{0} ".format(self.department))

    def __str__(self):       
        return super().__str__() + "  부서:{0} ".format(self.department)



# 사용자 코드
# 객체 생성 : Class 이름([argumentlist])
student = Student("CMSA07","박기윤","정보통신")
student2 = Student("CMSA07","홍길동","공학")
teacher = Teacher("T001","박성민","함수형프로그래밍")
employee = Employee("E001","심아윤","연구소")

#__eq__ 재정의 하기 전 객체의 주소값 비교 : student != student2
#__eq__ 재정의 한 후 (객체의 id값 비교) : student == student2
if student == student2 :
    print("student == student2")
else :
    print("student != student2")




# print("isinstance student Student : ", isinstance(student,Student))
# print("isinstance student Teacher : ", isinstance(student,Teacher))
# print("isinstance student Person : ", isinstance(student,Person)) # cast up

# # 객체 사용 : object 이름.변수, object 이름.메소드/기능([argumentlist])
# student.student_info()
# teacher.teacher_info()
# employee.employee_info()
# 사용자 코드의 재사용성 -> 객체지향의 특징.
# 다형성 : 한 가지 타입으로 여러 형태를 사용 가능. 예) Person 타입으로 Student, Teacher, Employee
#           Super에서 제공되는 method를 Sub에서 재정의 할 수 있다.
#           재정의 하는 경우 사용자가 Super의 method를 호출하더라도 재정의된 Sub의 method가 다양하게 응답될 수 있다. 
student.info()
teacher.info()
employee.info()

# 객체 출력 - 최상위 object class의 __str__ 호출
#           - Sub Class에서 재정의한 경우 Sub의 재정의된 메서드가 응답된다. 
print(student)
# print(student2)
print(teacher)
print(employee)