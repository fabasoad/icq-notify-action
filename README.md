# ICQ Notify GitHub Action

![GitHub release](https://img.shields.io/github/v/release/fabasoad/icq-notify-action?include_prereleases) ![Unit Tests](https://github.com/fabasoad/icq-notify-action/workflows/Unit%20Tests/badge.svg) ![Functional Tests](https://github.com/fabasoad/icq-notify-action/workflows/Functional%20Tests/badge.svg) ![YAML Lint](https://github.com/fabasoad/icq-notify-action/workflows/YAML%20Lint/badge.svg) ![Security Tests](https://github.com/fabasoad/icq-notify-action/workflows/Security%20Tests/badge.svg) [![Total alerts](https://img.shields.io/lgtm/alerts/g/fabasoad/icq-notify-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/icq-notify-action/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/fabasoad/icq-notify-action.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/fabasoad/icq-notify-action/context:javascript) [![Maintainability](https://api.codeclimate.com/v1/badges/1827148121eb4f330c1b/maintainability)](https://codeclimate.com/github/fabasoad/icq-notify-action/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/1827148121eb4f330c1b/test_coverage)](https://codeclimate.com/github/fabasoad/icq-notify-action/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/icq-notify-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabasoad/icq-notify-action?targetFile=package.json)

[ICQ Notify](https://github.com/fabasoad/icq-notify-action) GitHub Action.

## Example

### Usage

```yaml
name: ICQ Notify

on: push

jobs:
  job_1:
    name: Example
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@main
      - uses: fabasoad/icq-notify-action@main
        with:
          token: ${{ secrets.ICQ_TOKEN }}
          to: ${{ secrets.ICQ_TO }}
          message: 'Hello from GitHub Action'
```

### Result
