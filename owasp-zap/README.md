# ZenAttack Proxy

## Instructions

**Depending on how you wish to use ZAP.**

1. If your site has CSRF protection (CSRF Tokens), you need to natively install it.
2. If your site does not have CSRF, then use the docker compose route.

### Native Install

1. Run ```./install.sh```.
2. Follow the prompts.

### Docker Compose

1. ```docker-compose up -d```
2. Visit http://localhost:8888/zap
3. When prompted, choose to persist session.
4. Update the software and then click close.
5. Go to Tools > Options > Dynamic SSL Certificates
6. Copy the text to a file and save as a .cer file.
7. Import this cert as a trusted cert on your [browser](https://www.zaproxy.org/docs/desktop/ui/dialogs/options/dynsslcert/#install).
