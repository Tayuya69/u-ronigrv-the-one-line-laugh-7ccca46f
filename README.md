# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Tayuya69/u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/Tayuya69/u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)

An entry for [The One-Line Laugh](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f) on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single funny line — one sentence, 83 characters — to
`/output/entry.txt`:

> My plants died of neglect, so I bought fake ones and now I water them out of guilt.

## Running it

```sh
node main.ts
```

Outside the grader, set `MAKEFUN_OUTPUT_DIR` to choose where `entry.txt` is written:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

The program is fully deterministic: the line is a fixed string in code, so
every run writes the same bytes. No network, no dependencies, Node built-ins only.
