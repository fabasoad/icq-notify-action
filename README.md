# ICQ Notify GitHub Action

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![GitHub release](https://img.shields.io/github/v/release/fabasoad/icq-notify-action?include_prereleases)
![unit-tests](https://github.com/fabasoad/icq-notify-action/actions/workflows/unit-tests.yml/badge.svg)
![functional-tests](https://github.com/fabasoad/icq-notify-action/actions/workflows/functional-tests.yml/badge.svg)
![security](https://github.com/fabasoad/icq-notify-action/actions/workflows/security.yml/badge.svg)
![pre-commit](https://github.com/fabasoad/icq-notify-action/actions/workflows/pre-commit.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/1827148121eb4f330c1b/maintainability)](https://codeclimate.com/github/fabasoad/icq-notify-action/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1827148121eb4f330c1b/test_coverage)](https://codeclimate.com/github/fabasoad/icq-notify-action/test_coverage)
[![Known Vulnerabilities](https://snyk.io/test/github/fabasoad/icq-notify-action/badge.svg?targetFile=package.json)](https://snyk.io/test/github/fabasoad/icq-notify-action?targetFile=package.json)

[ICQ Notify](https://github.com/fabasoad/icq-notify-action) GitHub Action.

## Inputs

| Name    | Required | Description                                | Default | Type             |
|---------|----------|--------------------------------------------|---------|------------------|
| token   | Yes      | ICQ API token                              |         | _&lt;String&gt;_ |
| to      | Yes      | Recipient. Can be chat id or user nickname |         | _&lt;String&gt;_ |
| message | No       | Text message                               | `null`  | _&lt;String&gt;_ |
| file    | No       | File message                               | `null`  | _&lt;String&gt;_ |

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
          file: README.md
```

### Result

![Result](screenshot.png)
