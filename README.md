# Elite Stock Premium

**Android-first CRM для реселлеров электроники**

- React, TypeScript, Tailwind CSS, Lucide, Recharts
- PWA, WebView/TWA-ready, offline-first
- Продвинутая тёмная тема, нативное Android-ощущение

## Запуск

```sh
npm install
npm run dev
```

## Сборка

```sh
npm run build
```

## Особенности
- Высота приложения через `window.visualViewport` и CSS-переменную `--app-height`
- Безопасные зоны Android (`env(safe-area-inset-*)`)
- Отключение выделения текста, tap highlight, hover
- Только портретная ориентация, immersive-статусбар
- Все модальные окна и bottom sheets всегда над клавиатурой
- Данные хранятся в LocalStorage (`unit_premium_v10`)