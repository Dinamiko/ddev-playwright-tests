# DDEV Playwright Tests
Reusable GH workflows for running Playwright tests on DDEV environments.

## DDEV Setup

0. Install Docker and [DDEV](https://ddev.readthedocs.io/en/stable/).
1. Edit the configuration in the [`.ddev/config.yml`](.ddev/config.yaml) file if needed.
2. `$ ddev start`
3. `$ ddev orchestrate` to install WP/WC.
4. Open [https://ddev-playwright-tests.ddev.site](https://ddev-playwright-tests.ddev.site  )

Use `$ ddev orchestrate -f` for reinstalattion (will destroy all site data).
You may also need `$ ddev restart` to apply the config changes.

## Run tests
```
$ npx playwright test
$ npx playwright test example.spec.js --headed
$ npx playwright test -g "Test name here"
```
