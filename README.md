# katalon-studio-app
Codeless app automation testing with/without Cucumber and Page Object Model design pattern.

This repository consist of:
- Codeless app automation testing without Cucumber.
- Codeless app automation testing with Cucumber.
<br /><br />
This automation created using Katalon Studio version 8.5.5 and Page Object Model design pattern.

# Project Structure

## Codeless app automation testing without Cucumber
```
|--Test Cases
  |--Pages
  |--Step Definition
    |--Feature
|--Object Repository
  |--Page
|--Test Suites
  |--Feature
  |--...
|--Test Listeners
  |--Hook
```

## Codeless app automation testing with Cucumber
```
|--Test Cases
  |--Cucumber
    |--Runners
  |--Pages
|--Object Repository
  |--Page
|--Test Listeners
  |--Hook
|--Include
  |--features
  |--runners
  |--stepDefinition
```
# Run Automation

## Codeless app automation testing without Cucumber

1. Expand Test Suites
2. Click twice on a Feature, for example Feature Login
3. Click Run drop down
4. Click Android

## Codeless app automation testing with Cucumber

### Scenario config

1. Expand Include
2. Expand scripts
3. Expand groovy
4. Expand (default package)
5. Click twice Runner.groovy

### Run automation

1. Expand Test Cases
2. Expand Cucumber
3. Click twice on Runner
4. Click Run drop down
5. Click Android
