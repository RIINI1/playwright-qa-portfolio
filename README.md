# Playwright QA Portfolio

Автотесты на Playwright (JavaScript) для демо-магазина [saucedemo.com](https://www.saucedemo.com): логин и работа с корзиной. Архитектура — Page Object Model, CI — GitHub Actions.

![Tests](https://github.com/RIINI1/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)

## Стек
- Playwright (JavaScript)
- Page Object Model
- GitHub Actions (CI)

## Что покрыто тестами

**Логин (`tests/login.spec.js`)**
- Успешный вход под `standard_user`
- Ошибка при неверном пароле
- Заблокированный пользователь (`locked_out_user`) не может войти

**Корзина (`tests/cart.spec.js`)**
- Добавление товара в корзину и переход в неё

## Структура проекта
```
tests/
├── pages/
│   ├── LoginPage.js
│   └── InventoryPage.js
├── login.spec.js
└── cart.spec.js
docs/
└── test-cases.md
```

## Как запустить локально
```bash
npm install
npx playwright install
npx playwright test
npx playwright show-report
```

## Ручные тест-кейсы
См. [docs/test-cases.md](docs/test-cases.md) — тест-кейсы для логина и корзины в формате документации (предусловия / шаги / ожидаемый результат).
