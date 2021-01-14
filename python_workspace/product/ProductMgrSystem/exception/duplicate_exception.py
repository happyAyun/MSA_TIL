class DuplicateException(Exception):
    def __init__(self,message):
        super().__init__(message+": 이미 등록된 제품번호입니다.")
        