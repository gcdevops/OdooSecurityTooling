# Defect Dojo

## Description

[DefectDojo][1] is a security program and vulnerability management tool. DefectDojo allows you to manage your application security program, maintain product and application information, schedule scans, triage vulnerabilities and push findings into defect trackers. Consolidate your findings into one source of truth with DefectDojo.

## Instructions

1. You may need to change the env variables for the ports if conflicts. Look at ``docker-compose.yml`` to see what ports are used.
2. Bring up environment ```docker-compose up -d```
3. Get the admin password. ```docker-compose logs | grep "Admin password"```
4. Go to http://localhost:8080/ and login with username ```admin``` and password retreived from step 3.


[1]: https://github.com/DefectDojo/django-DefectDojo