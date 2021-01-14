class Schedule:
    def __init__(self,todoNum,title):
        self.todoNum = todoNum
        self.title = title
    
    def __eq__(self,todoNum):
        if self.todoNum == todoNum:
            return True
        else:
            return False

    def __str__(self):
        return "일정번호:{0} 일정:{1}".format(self.todoNum,self.title)