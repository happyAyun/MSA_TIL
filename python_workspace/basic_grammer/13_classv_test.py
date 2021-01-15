class ClassTest:
    class_v = 10 # 클래스 변수 : 클래스 타입의 모든 instance 공유하는 변수 클래스 이름으로 참조.

    def __init__(self,instance_v):
        self.instance_v = instance_v


c1 = ClassTest(10)
c2 = ClassTest(10)

c1.instance_v += 1
c2.instance_v += 1

c3 = ClassTest.class_v
c3 += 1
c4 = ClassTest.class_v
c4 += 1

ClassTest.class_v +=1 # 클래스 변수 사용
ClassTest.class_v +=1

c1.class_v += 1
c2.class_v += 1 # 공유되지 않음.

# 클래스 변수는 클래스 이름으로 참조해야 한다! 인스턴스 이름으로 하면 안됨.

print("{0} c1.instance_v , {1} c2.instance_v" .format(c1.instance_v, c2.instance_v))
print("{0} c3.class_v , {1} c4.class_v" .format(c3, c4))
print("{} ClassTest.class_v".format(ClassTest.class_v))