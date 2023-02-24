# DDEV Playwright Tests
Reusable workflow for running Playwright tests on DDEV environments.

## DDEV Setup

0. Install Docker and [DDEV](https://ddev.readthedocs.io/en/stable/).
1. Edit the configuration in the [`.ddev/config.yml`](.ddev/config.yaml) file if needed.
2. `$ ddev start`
3. `$ ddev orchestrate` to install WP/WC.
4. Open [https://ddev-playwright-tests.ddev.site](https://ddev-playwright-tests.ddev.site  )

Use `$ ddev orchestrate -f` for reinstalation (will destroy all site data).
You may also need `$ ddev restart` to apply the config changes.

## Webhooks Setup
For testing webhooks locally, follow these steps to set up ngrok:

0. Install [ngrok](https://ngrok.com/).
1. Run our wrapper Bash script which will start `ddev share` and replace the URLs in the WP database:
```
$ .ddev/bin/share
```

## Local Environment Variables
Allows using local variables inside the tests.

0. Duplicate `.env.sample` and rename it as `.env`, set values and add new variables if needed.  

## Run Tests
```
$ npx playwright test
$ npx playwright test example.spec.js --headed
$ npx playwright test -g "Test name here"
```
