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
50�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
**/

SELECT AVG(SALARY) "������ ���" , MAX(SALARY) �ְ�, MIN(SALARY) ����, COUNT(DEPARTMENT_ID)�ο��� 
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 50;


/**
�� �μ��� �޿��� ���, �ְ�, ����, �ο����� ���Ͽ� ����϶�.
**/

SELECT AVG(SALARY) "�޿��� ���", MAX(SALARY) �ְ�, MIN(SALARY) ����, COUNT(EMPLOYEE_ID)�ο���
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;


/**
�� �μ��� ���� ������ �ϴ� ����� �ο����� ���Ͽ� �μ���ȣ, ������, �ο����� ����϶�.
**/

SELECT COUNT(EMPLOYEE_ID) �ο���, DEPARTMENT_ID �μ���ȣ, JOB_ID ������
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID,JOB_ID;


/**
���� ������ �ϴ� ����� ���� 4�� �̻��� ������ �ο����� ����϶�.
**/

SELECT JOB_ID ����, COUNT(EMPLOYEE_ID) �ο���
FROM EMPLOYEES
GROUP BY JOB_ID
HAVING COUNT(EMPLOYEE_ID) >= 4;


/**
�� �μ��� ��տ���, ��ü����, �ְ����, ��������,�� ���Ͽ� ��տ����� ���������� ����϶�.
**/

SELECT AVG(SALARY) ��տ���, SUM(SALARY) ��ü����, MAX(SALARY) �ְ����, MIN(SALARY) ��������
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
ORDER BY AVG(SALARY) DESC;

/**
 �μ���ȣ, �μ���, �̸�, �޿��� ����϶�.
**/

SELECT D.DEPARTMENT_ID �μ���ȣ, D.DEPARTMENT_NAME �μ���, E.FIRST_NAME �̸�, E.SALARY �޿�
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.DEPARTMENT_ID = D.DEPARTMENT_ID;

/**
�̸��� Adam�� ����� �μ����� ����϶�.
**/

SELECT E.FIRST_NAME ����̸�, D.DEPARTMENT_NAME
FROM EMPLOYEES E, DEPARTMENTS D
WHERE E.FIRST_NAME = 'Adam' AND E.DEPARTMENT_ID = D.DEPARTMENT_ID;

/**????????????
employees���̺� �ִ� employee_id�� manager_id�� �̿��Ͽ� ������ ���踦 ������ ���� ����϶�
'smith'�� �Ŵ����� 'ford'�̴�.
**/



/**
Adam�� ������ ���� ������ ���� ����� �̸�, �μ���, �޿�, ������ ����϶�.
**/

SELECT E.FIRST_NAME �̸�, D.DEPARTMENT_NAME �μ���, E.SALARY �޿�, E.JOB_ID ����
FROM EMPLOYEES E, DEPARTMENTS D
WHERE FIRST_NAME <> 'Adam' 
AND E.DEPARTMENT_ID = D.DEPARTMENT_ID 
AND E.JOB_ID = (SELECT JOB_ID
		FROM EMPLOYEES
		WHERE FIRST_NAME='Adam');


/**
��ü ����� ��� �ӱݺ��� ���� ����� �����ȣ, �̸�, �μ���, �Ի���, ����, �޿��� ����϶�.
**/

SELECT D.DEPARTMENT_ID �����ȣ, E.FIRST_NAME �̸�, D.DEPARTMENT_NAME �μ���,
E.HIRE_DATE �Ի���, D.LOCATION_ID ����, E.SALARY �޿�
FROM DEPARTMENTS D, EMPLOYEES E
WHERE D.DEPARTMENT_ID = E.DEPARTMENT_ID 
AND E.SALARY >(SELECT AVG(SALARY)
		FROM EMPLOYEES);


/**
50�� �μ������ �߿��� 30�� �μ��� ����� ���� ������ �ϴ� ����� �����ȣ, �̸�, �μ���, �Ի����� ����϶�.
**/

SELECT E.EMPLOYEE_ID �����ȣ, E.FIRST_NAME �̸�, D.DEPARTMENT_NAME �μ���, E.HIRE_DATE �Ի���
FROM EMPLOYEES E, DEPARTMENTS D
WHERE D.DEPARTMENT_ID = E.DEPARTMENT_ID 
AND D.DEPARTMENT_ID = 50 
AND E.JOB_ID IN (SELECT JOB_ID
		FROM EMPLOYEES
		WHERE DEPARTMENT_ID = 30);


/**
�޿��� 30�� �μ��� �ְ� �޿����� ���� ����� �����ȣ, �̸�, �޿��� ����϶�.
**/

SELECT EMPLOYEE_ID �����ȣ, FIRST_NAME �̸�, SALARY �޿�
FROM EMPLOYEES
WHERE SALARY > (SELECT MAX(SALARY)
		FROM EMPLOYEES
		WHERE DEPARTMENT_ID = 30);
