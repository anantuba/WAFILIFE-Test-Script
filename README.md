# Project Setup and Cypress Commands

This project provides instructions on setting up Cypress for running end-to-end tests and provides details on the Cypress commands you can use.

## Prerequisites
- NodeJS (Check Node Version: `node -v`)
- NPM (Check NPM Version: `npm -v`)

## Project Setup
1. Create a blank project folder.
2. Open the folder in your preferred IDE, such as Visual Studio Code.
3. Open the terminal and navigate to the project folder.

## Initializing the Project

To initialize the project, run the following command in the terminal:

```bash
npm init -y
```
## Install Cypress
To install Cypress, run the following command:
```bash
npm install cypress -–save-dev
```
## Verifying Cypress Installation
To verify the Cypress installation, run the following command:
```bash
npx cypress -v
```
```bash
npx cypress verify
```
## Opening Cypress
To open Cypress, run the following command:
```bash
npx cypress open
```
Run All Tests with Browser Headless
```bash
cypress run e2e
```
To run specific suit
```bash
cypress run --spec
```
Run in Chrome Browser
```bash
cypress run --browser chrome
```
Run with Browser Head AND WILL GENERATE HTML REPORT
```bash
cypress run e2e --headed
```
## Working Files and Folders
1. e2e [To write All Tests]
2. Fixtures >> JSON file [For contant values]
3. PageObjects [For Page Object Model]
4. Support >> Commands.js [For Base Settings]
5. cypress.conf.js [For Test Run Related Configuration]
6. cypress run --e2e --headed --reporter mochawesome [Run with generate Mocha reports]
7. cypress/test-report/*.json > cypress/test-report/output.json


