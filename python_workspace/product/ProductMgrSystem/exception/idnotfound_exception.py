class IDNotFoundException(Exception):
    def __init__(self,message):
        super().__init__(message+": 해당 제품번호를 찾을 수 없습니다.")