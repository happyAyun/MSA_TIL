/**********************************************************
*	SQL Query & Function Example1
**********************************************************/
/**
-- Employees Table Columns
-- EMPLOYEE_ID
-- FIRST_NAME
-- LAST_NAME
-- EMAIL
-- PHONE_NUMBER
-- HIRE_DATE
-- JOB_ID
-- SALARY
-- COMMISSION_PCT
-- MANAGER_ID
-- DEPARTMENT_ID
**/
--------------------

SQL> connect system/
Enter password:
Connected.
SQL> ALTER USER hr ACCOUNT UNLOCK;

User altered.

SQL> ALTER USER hr IDENTIFIED BY hr;

User altered.

SQL> connect hr/hr
Connected.

-----------------------

--부서번호가 10번인 부서의 사람 중 사원번호, 이름, 월급을 출력하라

SELECT employee_id 사원번호, first_name 이름, salary 월급 
FROM employees 
WHERE department_id = 10;


--사원번호가 7369인 사람 중 이름, 입사일, 부서 번호를 출력하라.

SELECT first_name 이름, hire_date 입사일, department_id
FROM employees
WHERE employee_id = 7369;


--이름이 Ellen인 사람의 모든 정보를 출력하라.

SELECT * 
FROM employees 
WHERE first_name = 'Ellen';


--입사일이 08/04/21인 사원의 이름, 부서번호, 월급을 출력하라.

SELECT FIRST_NAME 이름, DEPARTMENT_ID 부서번호, SALARY 월급
FROM EMPLOYEES
WHERE HIRE_DATE='09/03/21';


--직무가 SA_MAN 아닌 사람의 모든 정보를 출력하라.

SELECT *
FROM EMPLOYEES
WHERE JOB_ID='SA_MAN';


--입사일이 08/04/21 이후에 입사한 사원의 정보를 출력하라.

SELECT *
FROM EMPLOYEES
WHERE HIRE_DATE >= '08/04/21';


--부서번호와 20,30번을 제외한 모든 사람의 이름, 사원번호, 부서번호를 출력하라.

SELECT FIRST_NAME 이름, EMPLOYEE_ID 사원번호, DEPARTMENT_ID 부서번호
FROM EMPLOYEES
WHERE DEPARTMENT_ID NOT IN (20,30);


--이름이 S로 시작하는 사원의 사원번호, 이름, 입사일, 부서번호를 출력하라.

SELECT EMPLOYEE_ID 사원번호, FIRST_NAME 이름, HIRE_DATE 입사일, DEPARTMENT_ID 부서번호
FROM EMPLOYEES
WHERE FIRST_NAME LIKE 'S%';


--이름이 s로 시작하고 마지막 글자가 t인 사람이 정보를 출력하라.

SELECT *
FROM EMPLOYEES
WHERE FIRST_NAME LIKE 's%t'; 


/**??????? - 상여
employees 테이블에서 이름, 급여, 상여, 총액을 구하여 총액 많은 순서로 출력하라 단 상여금이 NULL인 사람은 제외
*/

SELECT FIRST_NAME 이름, SALARY 급여, SALARY*COMMISSION_PCT 상여, SALARY+ (SALARY*COMMISSION_PCT) 총액
FROM EMPLOYEES
WHERE COMMISSION_PCT IS NOT NULL
ORDER BY SALARY+ (SALARY*COMMISSION_PCT) DESC;


/**
10번 부서의 모든 사람들에게 급여의 13%를 보너스로 지불하기로 하였다. 이름, 급여, 보너스금액, 부서번호를 출력하라.
**/

SELECT FIRST_NAME 이름, SALARY 급여, SALARY*0.13 보너스금액, DEPARTMENT_ID 부서번호
FROM EMPLOYEES 
WHERE DEPARTMENT_ID = 10;

/**
30번 부서의 연봉을 계산하여 이름, 부서번호, 급여, 연봉을 출력하라. 단 연말에 급여의 150%를 보너스로 지급한다.
   -- 연봉 = sal*12+(sal*1.5)
**/

SELECT FIRST_NAME 이름, DEPARTMENT_ID 부서번호, SALARY 급여, SALARY*12+(SALARY*1.5) 연봉
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 30;

/**
부서번호가 20인 부서의 시간당 임금을 계산하여 출력하라. 단 1달의 근무일수는 12일이고 1일 근무시간은 5시간이다.
출력양식은 이름, 급여, 시간당 임금(소수이하 1번째 자리에서 반올림)을 출력하라.
   -- 시급 = sal/일수/시간  -> sal/ 12/5 
   -- round(m, n) m을 소수점 n자리에서 반올림 
**/

SELECT FIRST_NAME 이름, SALARY 급여, ROUND(SALARY/12/5,1) 시간당임금
FROM EMPLOYEES
WHERE DEPARTMENT_ID=20;

/**
급여가 1500부터 3000사이의 사람은 급여의 5%를 회비로 지불하기로 하였다. 이를 이름, 급여, 회비(-2자리에서 반올림)를 출력하라.
	-- 회비  = sal * 0.05	
	-- -2자리에서 반올림 : 정수 2번째 자리에서 반올림.. 100단위로  
**/

SELECT FIRST_NAME 이름, SALARY 급여, ROUND(SALARY*0.05,-2)
FROM EMPLOYEES
WHERE SALARY BETWEEN 1500 AND 3000;

/**
입사일부터 지금까지의 날짜수를 출력하라. 부서번호, 이름, 입사일, 현재일, 근무일수(소수점이하절삭), 근무년수,
 근무월수(30일 기준)를 출력하라.
	-- 지금 날짜 : sysdate 
	-- 근무 일수 : 현재날짜 - 입사일 = sysdate - hire_date  -> 날짜 - 날짜 : 일수 나옴
	-- 근무 년수 : to_char(sysdate,'YYYY')-to_char(hiredate,'YYYY')
	-- 근무 월수 : 근무일수 / 1달(30일)
**/

SELECT DEPARTMENT_ID 부서번호, FIRST_NAME 이름, HIRE_DATE 입사일, SYSDATE 현재일 , 
ROUND(SYSDATE-HIRE_DATE,0) 근무일수, TO_CHAR(SYSDATE,'YYYY')-TO_CHAR(HIRE_DATE,'YYYY') 근무년수,
(SYSDATE-HIRE_DATE)/30 근무월수
FROM EMPLOYEES;


/**
입사일로부터 오늘까지의 일수를 구하여 이름, 입사일, 근무일수를 출력하라.
--round(sysdate-hiredate,0) 근무일수
**/

SELECT FIRST_NAME 이름, HIRE_DATE 입사일, ROUND(SYSDATE-HIRE_DATE,0) 근무일수
FROM EMPLOYEES;

/**
입사일을 2012년 7월 5일의 형태로 이름, 입사일을 출력하라.
	-- 날짜 형시 앞에 fm 은 선행 '0'을 표현하지 않는다는 뜻.. 
	-- 'fmYYYY"년" MM"월" DD"일' 
**/

SELECT FIRST_NAME 이름, TO_CHAR(HIRE_DATE, 'fmYYYY"년" MM"월" DD"일"') 입사일
FROM EMPLOYEES;


/**
이름(first_name)의 글자수가 6자이상인 사람의 이름을 앞에서 3자만 구하여 소문자로 이름만을 출력하라.
	-- substr(str, position, length) : str 문자를 positin 부터 length길이 만큼 표현
	-- lower(str)  소문자 변환
	-- length(str)  str의 길이
**/

SELECT LOWER(SUBSTR(FIRST_NAME,1,3))
FROM EMPLOYEES
WHERE LENGTH(FIRST_NAME) >= 6;

/**
10번 부서 월급의 평균ㅡ 최고, 최저, 인원수를 구하여 출력하라
**/


SELECT AVG(SALARY) 평균, MAX(SALARY) 최고, MIN(SALARY) 최저, COUNT(SALARY) 인원수
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 10; 


/**
각 부서별 급여의 평균, 최고, 최저, 인원수를 구하여 출력하라.
**/

SELECT DEPARTMENT_ID 부서번호, AVG(SALARY) 평균, MAX(SALARY) 최고, MIN(SALARY) 최저, COUNT(SALARY) 인원수
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;


/**
각 부서별 같은 업무를 하는 사람의 인원수를 구하여 부서번호, 업무명, 인원수를 출력하라.
**/

SELECT DEPARTMENT_ID 부서번호, JOB_ID 업무명, COUNT(DEPARTMENT_ID) 인원수
FROM EMPLOYEES 
GROUP BY DEPARTMENT_ID,JOB_ID;


/**
같은 업무를 하는 사람의 수가 4명 이상인 업무와 인원수를 출력하라.
**/

SELECT JOB_ID 업무, COUNT(JOB_ID) 인원수
FROM EMPLOYEES
GROUP BY JOB_ID
HAVING COUNT(JOB_ID) >= 4;


/**
각 부서별 평균월급, 전체월급, 최고월급, 최저월급,을 구하여 평균월급이 많은순으로 출력하라.
**/

SELECT DEPARTMENT_ID 부서, AVG(SALARY) 평균월급, SUM(SALARY) 전체월급, MAX(SALARY) 최고월급, MIN(SALARY) 최저월급
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
ORDER BY AVG(SALARY) DESC;



