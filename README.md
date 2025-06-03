# ICQ Notify GitHub Action

[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg)](https://stand-with-ukraine.pp.ua)
![GitHub release](https://img.shields.io/github/v/release/fabasoad/icq-notify-action?include_prereleases)
![unit-tests](https://github.com/fabasoad/icq-notify-action/actions/workflows/unit-tests.yml/badge.svg)
![functional-tests](https://github.com/fabasoad/icq-notify-action/actions/workflows/functional-tests.yml/badge.svg)
![security](https://github.com/fabasoad/icq-notify-action/actions/workflows/security.yml/badge.svg)
![linting](https://github.com/fabasoad/icq-notify-action/actions/workflows/linting.yml/badge.svg)
[![codecov](https://codecov.io/gh/fabasoad/icq-notify-action/branch/main/graph/badge.svg?token=USHQWL2QKX)](https://codecov.io/gh/fabasoad/icq-notify-action)

[ICQ Notify](https://github.com/fabasoad/icq-notify-action) GitHub Action.

## Inputs

| Name    | Required | Description                                | Default | Type             |
|---------|----------|--------------------------------------------|---------|------------------|
| token   | Yes      | ICQ API token                              |         | _&lt;String&gt;_ |
| to      | Yes      | Recipient. Can be chat id or user nickname |         | _&lt;String&gt;_ |
| message | No       | Text message                               |         | _&lt;String&gt;_ |
| file    | No       | File message                               |         | _&lt;String&gt;_ |

## Example

### Usage

```yaml
- uses: fabasoad/icq-notify-action@v2
  with:
    token: ${{ secrets.ICQ_TOKEN }}
    to: ${{ secrets.ICQ_TO }}
    message: 'Hello from GitHub Action'
    file: README.md
```

### Result

![Result](screenshot.png)

## Contributions

![Alt](https://repobeats.axiom.co/api/embed/1463254973ac0e91284e7437325e373de758614d.svg "Repobeats analytics image")
