# Basic PHPCS configuration for use in PHP/Drupal projects.

Coder 8.x will work on D9, D8 and D7 projects.  Coder package should not be installed for non-drupal projects and all references to it's rulesets should be removed from the `phpcs.xml.dist` file.

By default, this provides a very verbose and noisy ruleset out of the box, applying all warning and weak warning rules as well as error rules to suggest best practices.  The ruleset applied can be tuned to the specific needs of the individual project by editing the `phpcs.xml.dist` file.

## Setup
* Copy the `phpcs.xml.dist` file into your project.
* Edit the project's composer.json file to include the packages listed in `composer.json.example`.
* Run composer to install the new packages.
* Edit the `phpcs.xml.dist` file to include the proper paths for your project, examples are included for Dockerstand and Landostand based projects.
* From the project root, run `./vendor/bin/phpcs` to sniff and generate the report.
