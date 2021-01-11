/**********************************************************
*	SQL Query & Function Example2
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

/**
--Departments Table Columns
--DEPARTMENT_ID
--DEPARTMENT_NAME
--MANAGER_ID
--LOCATION_ID
**/

/**
50번 부서 월급의 평균ㅡ 최고, 최저, 인원수를 구하여 출력하라
**/

SELECT AVG(SALARY) "월급의 평균" , MAX(SALARY) 최고, MIN(SALARY) 최저, COUNT(DEPARTMENT_ID)인원수 
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 50;


/**
각 부서별 급여의 평균, 최고, 최저, 인원수를 구하여 출력하라.
**/

SELECT AVG(SALARY) "급여의 평균", MAX(SALARY) 최고, MIN(SALARY) 최저, COUNT(EMPLOYEE_ID)인원수
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;


/**
각 부서별 같은 업무를 하는 사람의 인원수를 구하여 부서번호, 업무명, 인원수를 출력하라.
**/

SELECT COUNT(EMPLOYEE_ID) 인원수, DEPARTMENT_ID 부서번호, JOB_ID 업무명
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID,JOB_ID;


/**
같은 업무를 하는 사람의 수가 4명 이상인 업무와 인원수를 출력하라.
**/

SELECT JOB_ID 업무, COUNT(EMPLOYEE_ID) 인원수
FROM EMPLOYEES
GROUP BY JOB_ID
HAVING COUNT(EMPLOYEE_ID) >= 4;


/**
각 부서별 평균월급, 전체월급, 최고월급, 최저월급,을 구하여 평균월급이 많은순으로 출력하라.
**/

SELECT AVG(SALARY) 평균월급, SUM(SALARY) 전체월급, MAX(SALARY) 최고월급, MIN(SALARY) 최저월급
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
ORDER BY AVG(SALARY) DESC;

/**
 부서번호, 부서명, 이름, 급여를 출력하라.
**/

SELECT D.DEPARTMENT_ID 부서번호, D.DEPARTMENT_NAME 부서명, E.FIRST_NAME 이름, E.SALARY 급여
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEPARTMENT_ID = D.DEPARTMENT_ID;

/**
이름이 Adam인 사원의 부서명을 출력하라.
**/

SELECT E.FIRST_NAME 사원이름, D.DEPARTMENT_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.FIRST_NAME = 'Adam' AND E.DEPARTMENT_ID = D.DEPARTMENT_ID;

/**????????????
employees테이블에 있는 employee_id와 manager_id를 이용하여 서로의 관계를 다음과 같이 출력하라
'smith'의 매니저는 'ford'이다.
**/



/**
Adam의 직무와 같은 직무를 갖는 사람의 이름, 부서명, 급여, 직무를 출력하라.
**/

SELECT E.FIRST_NAME 이름, D.DEPARTMENT_NAME 부서명, E.SALARY 급여, E.JOB_ID 직무
FROM EMPLOYEES E, DEPARTMENTS D
WHERE FIRST_NAME <> 'Adam' 
AND E.DEPARTMENT_ID = D.DEPARTMENT_ID 
AND E.JOB_ID = (SELECT JOB_ID
		FROM EMPLOYEES
		WHERE FIRST_NAME='Adam');


/**
전체 사원의 평균 임금보다 많은 사원의 사원번호, 이름, 부서명, 입사일, 지역, 급여를 출력하라.
**/

SELECT D.DEPARTMENT_ID 사원번호, E.FIRST_NAME 이름, D.DEPARTMENT_NAME 부서명,
E.HIRE_DATE 입사일, D.LOCATION_ID 지역, E.SALARY 급여
FROM DEPARTMENTS D, EMPLOYEES E
WHERE D.DEPARTMENT_ID = E.DEPARTMENT_ID 
AND E.SALARY >(SELECT AVG(SALARY)
		FROM EMPLOYEES);


/**
50번 부서사람들 중에서 30번 부서의 사원과 같은 업무를 하는 사원의 사원번호, 이름, 부서명, 입사일을 출력하라.
**/

SELECT E.EMPLOYEE_ID 사원번호, E.FIRST_NAME 이름, D.DEPARTMENT_NAME 부서명, E.HIRE_DATE 입사일
FROM EMPLOYEES E, DEPARTMENTS D
WHERE D.DEPARTMENT_ID = E.DEPARTMENT_ID 
AND D.DEPARTMENT_ID = 50 
AND E.JOB_ID IN (SELECT JOB_ID
		FROM EMPLOYEES
		WHERE DEPARTMENT_ID = 30);


/**
급여가 30번 부서의 최고 급여보다 높은 사원의 사원번호, 이름, 급여를 출력하라.
**/

SELECT EMPLOYEE_ID 사원번호, FIRST_NAME 이름, SALARY 급여
FROM EMPLOYEES
WHERE SALARY > (SELECT MAX(SALARY)
		FROM EMPLOYEES
		WHERE DEPARTMENT_ID = 30);
