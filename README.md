# ddev-wordpress-plugin-template
DDEV configuration template for developing individual WordPress plugins

## Goals
* WordPress plugin repositories with a full-featured test environment
* Not require an WP-specific files and folders under version control. Everything happens under `.ddev/wordpress` and is gitignored
* Enable PHPStorm integration and xDebug support

## Usage
Use this repository as a template when creating a new project

Then change `.ddev/config.yaml` to suit your project. You will probably need to at least modify the
 `name:` as well as the environment variables under `web_environment`

After your usual `ddev start`, you need to run `dddev orchestrate` once. This will install WordPress and configure the environment for you
To recreate your environment from scratch, use `ddev orchestrate -f|--force`

## Testing Webhooks/IPN
You can make your project publicly available using `ddev share`. For this, you need to have a tool called [`ngrok`](https://ngrok.com/) installed on your host machine. You also need to have an authentication token configured which requires setting up an account, see [ngrok's setup instructions](https://dashboard.ngrok.com/get-started)
With this in place, you can use the `ddev share` command to make your project publicly accessible.
