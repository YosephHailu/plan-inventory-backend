@echo off
set db_user=DB_USER
set db_password=DB_PASSWORD
set db_name=DB_NAME
set backup_path=C:\path\to\backup\directory
set timestamp=%DATE:~10,4%-%DATE:~4,2%-%DATE:~7,2%_%TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%

mysqldump -u %db_user% -p%db_password% %db_name% > %backup_path%\%db_name%_%timestamp%.sql


@REM https://chatgpt.com/c/4950246a-b360-4116-9e97-ad4554ea52c8