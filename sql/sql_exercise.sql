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

--�μ���ȣ�� 10���� �μ��� ��� �� �����ȣ, �̸�, ������ ����϶�

SELECT employee_id �����ȣ, first_name �̸�, salary ���� 
FROM employees 
WHERE department_id = 10;


--�����ȣ�� 7369�� ��� �� �̸�, �Ի���, �μ� ��ȣ�� ����϶�.

SELECT first_name �̸�, hire_date �Ի���, department_id
FROM employees
WHERE employee_id = 7369;


--�̸��� Ellen�� ����� ��� ������ ����϶�.

SELECT * 
FROM employees 
WHERE first_name = 'Ellen';


--�Ի����� 08/04/21�� ����� �̸�, �μ���ȣ, ������ ����϶�.

SELECT FIRST_NAME �̸�, DEPARTMENT_ID �μ���ȣ, SALARY ����
FROM EMPLOYEES
WHERE HIRE_DATE='09/03/21';


--������ SA_MAN �ƴ� ����� ��� ������ ����϶�.

SELECT *
FROM EMPLOYEES
WHERE JOB_ID='SA_MAN';


--�Ի����� 08/04/21 ���Ŀ� �Ի��� ����� ������ ����϶�.

SELECT *
FROM EMPLOYEES
WHERE HIRE_DATE >= '08/04/21';


--�μ���ȣ�� 20,30���� ������ ��� ����� �̸�, �����ȣ, �μ���ȣ�� ����϶�.

SELECT FIRST_NAME �̸�, EMPLOYEE_ID �����ȣ, DEPARTMENT_ID �μ���ȣ
FROM EMPLOYEES
WHERE DEPARTMENT_ID NOT IN (20,30);


--�̸��� S�� �����ϴ� ����� �����ȣ, �̸�, �Ի���, �μ���ȣ�� ����϶�.

SELECT EMPLOYEE_ID �����ȣ, FIRST_NAME �̸�, HIRE_DATE �Ի���, DEPARTMENT_ID �μ���ȣ
FROM EMPLOYEES
WHERE FIRST_NAME LIKE 'S%';


--�̸��� s�� �����ϰ� ������ ���ڰ� t�� ����� ������ ����϶�.

SELECT *
FROM EMPLOYEES
WHERE FIRST_NAME LIKE 's%t'; 


/**??????? - ��
employees ���̺��� �̸�, �޿�, ��, �Ѿ��� ���Ͽ� �Ѿ� ���� ������ ����϶� �� �󿩱��� NULL�� ����� ����
*/

SELECT FIRST_NAME �̸�, SALARY �޿�, SALARY*COMMISSION_PCT ��, SALARY+ (SALARY*COMMISSION_PCT) �Ѿ�
FROM EMPLOYEES
WHERE COMMISSION_PCT IS NOT NULL
ORDER BY SALARY+ (SALARY*COMMISSION_PCT) DESC;


/**
10�� �μ��� ��� ����鿡�� �޿��� 13%�� ���ʽ��� �����ϱ�� �Ͽ���. �̸�, �޿�, ���ʽ��ݾ�, �μ���ȣ�� ����϶�.
**/

SELECT FIRST_NAME �̸�, SALARY �޿�, SALARY*0.13 ���ʽ��ݾ�, DEPARTMENT_ID �μ���ȣ
FROM EMPLOYEES 
WHERE DEPARTMENT_ID = 10;

/**
30�� �μ��� ������ ����Ͽ� �̸�, �μ���ȣ, �޿�, ������ ����϶�. �� ������ �޿��� 150%�� ���ʽ��� �����Ѵ�.
   -- ���� = sal*12+(sal*1.5)
**/

SELECT FIRST_NAME �̸�, DEPARTMENT_ID �μ���ȣ, SALARY �޿�, SALARY*12+(SALARY*1.5) ����
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 30;

/**
�μ���ȣ�� 20�� �μ��� �ð��� �ӱ��� ����Ͽ� ����϶�. �� 1���� �ٹ��ϼ��� 12���̰� 1�� �ٹ��ð��� 5�ð��̴�.
��¾���� �̸�, �޿�, �ð��� �ӱ�(�Ҽ����� 1��° �ڸ����� �ݿø�)�� ����϶�.
   -- �ñ� = sal/�ϼ�/�ð�  -> sal/ 12/5 
   -- round(m, n) m�� �Ҽ��� n�ڸ����� �ݿø� 
**/

SELECT FIRST_NAME �̸�, SALARY �޿�, ROUND(SALARY/12/5,1) �ð����ӱ�
FROM EMPLOYEES
WHERE DEPARTMENT_ID=20;

/**
�޿��� 1500���� 3000������ ����� �޿��� 5%�� ȸ��� �����ϱ�� �Ͽ���. �̸� �̸�, �޿�, ȸ��(-2�ڸ����� �ݿø�)�� ����϶�.
	-- ȸ��  = sal * 0.05	
	-- -2�ڸ����� �ݿø� : ���� 2��° �ڸ����� �ݿø�.. 100������  
**/

SELECT FIRST_NAME �̸�, SALARY �޿�, ROUND(SALARY*0.05,-2)
FROM EMPLOYEES
WHERE SALARY BETWEEN 1500 AND 3000;

/**
�Ի��Ϻ��� ���ݱ����� ��¥���� ����϶�. �μ���ȣ, �̸�, �Ի���, ������, �ٹ��ϼ�(�Ҽ�����������), �ٹ����,
 �ٹ�����(30�� ����)�� ����϶�.
	-- ���� ��¥ : sysdate 
	-- �ٹ� �ϼ� : ���糯¥ - �Ի��� = sysdate - hire_date  -> ��¥ - ��¥ : �ϼ� ����
	-- �ٹ� ��� : to_char(sysdate,'YYYY')-to_char(hiredate,'YYYY')
	-- �ٹ� ���� : �ٹ��ϼ� / 1��(30��)
**/

SELECT DEPARTMENT_ID �μ���ȣ, FIRST_NAME �̸�, HIRE_DATE �Ի���, SYSDATE ������ , 
ROUND(SYSDATE-HIRE_DATE,0) �ٹ��ϼ�, TO_CHAR(SYSDATE,'YYYY')-TO_CHAR(HIRE_DATE,'YYYY') �ٹ����,
(SYSDATE-HIRE_DATE)/30 �ٹ�����
FROM EMPLOYEES;


/**
�Ի��Ϸκ��� ���ñ����� �ϼ��� ���Ͽ� �̸�, �Ի���, �ٹ��ϼ��� ����϶�.
--round(sysdate-hiredate,0) �ٹ��ϼ�
**/

SELECT FIRST_NAME �̸�, HIRE_DATE �Ի���, ROUND(SYSDATE-HIRE_DATE,0) �ٹ��ϼ�
FROM EMPLOYEES;

/**
�Ի����� 2012�� 7�� 5���� ���·� �̸�, �Ի����� ����϶�.
	-- ��¥ ���� �տ� fm �� ���� '0'�� ǥ������ �ʴ´ٴ� ��.. 
	-- 'fmYYYY"��" MM"��" DD"��' 
**/

SELECT FIRST_NAME �̸�, TO_CHAR(HIRE_DATE, 'fmYYYY"��" MM"��" DD"��"') �Ի���
FROM EMPLOYEES;


/**
�̸�(first_name)�� ���ڼ��� 6���̻��� ����� �̸��� �տ��� 3�ڸ� ���Ͽ� �ҹ��ڷ� �̸����� ����϶�.
	-- substr(str, position, length) : str ���ڸ� positin ���� length���� ��ŭ ǥ��
	-- lower(str)  �ҹ��� ��ȯ
	-- length(str)  str�� ����
**/

SELECT LOWER(SUBSTR(FIRST_NAME,1,3))
FROM EMPLOYEES
WHERE LENGTH(FIRST_NAME) >= 6;

/**
10�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
**/


SELECT AVG(SALARY) ���, MAX(SALARY) �ְ�, MIN(SALARY) ����, COUNT(SALARY) �ο���
FROM EMPLOYEES
WHERE DEPARTMENT_ID = 10; 


/**
�� �μ��� �޿��� ���, �ְ�, ����, �ο����� ���Ͽ� ����϶�.
**/

SELECT DEPARTMENT_ID �μ���ȣ, AVG(SALARY) ���, MAX(SALARY) �ְ�, MIN(SALARY) ����, COUNT(SALARY) �ο���
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID;


/**
�� �μ��� ���� ������ �ϴ� ����� �ο����� ���Ͽ� �μ���ȣ, ������, �ο����� ����϶�.
**/

SELECT DEPARTMENT_ID �μ���ȣ, JOB_ID ������, COUNT(DEPARTMENT_ID) �ο���
FROM EMPLOYEES 
GROUP BY DEPARTMENT_ID,JOB_ID;


/**
���� ������ �ϴ� ����� ���� 4�� �̻��� ������ �ο����� ����϶�.
**/

SELECT JOB_ID ����, COUNT(JOB_ID) �ο���
FROM EMPLOYEES
GROUP BY JOB_ID
HAVING COUNT(JOB_ID) >= 4;


/**
�� �μ��� ��տ���, ��ü����, �ְ����, ��������,�� ���Ͽ� ��տ����� ���������� ����϶�.
**/

SELECT DEPARTMENT_ID �μ�, AVG(SALARY) ��տ���, SUM(SALARY) ��ü����, MAX(SALARY) �ְ����, MIN(SALARY) ��������
FROM EMPLOYEES
GROUP BY DEPARTMENT_ID
ORDER BY AVG(SALARY) DESC;



