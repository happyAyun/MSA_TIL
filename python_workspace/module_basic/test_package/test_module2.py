def number_input():
    x = int(input("가로 길이 : "))
    y = int(input("세로 길이 : "))
    return (x,y) # tuple 형식으로 return

def get_circumference(x,y) :
    return 2*x + 2*y

def get_rectangle_area(x,y) :
    return x*y