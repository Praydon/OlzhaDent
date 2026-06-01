# Olzha Dent Landing

Современный адаптивный лендинг для стоматологической клиники Olzha Dent в Алматы.

## Запуск

```bash
npm install
npm run dev
```

Для production-сборки:

```bash
npm run build
npm run preview
```

## Где менять данные клиники

- Основные контакты, адрес, WhatsApp, Instagram, рейтинг и ссылки находятся в [`src/App.jsx`](/Users/ruslanzlobin/Desktop/Olza%20Dent/src/App.jsx) в объекте `clinic`.
- Список услуг, преимущества, шаги записи, команда и отзывы тоже находятся в [`src/App.jsx`](/Users/ruslanzlobin/Desktop/Olza%20Dent/src/App.jsx) как отдельные массивы.
- Визуальные акценты, фон и шрифты можно править в [`src/index.css`](/Users/ruslanzlobin/Desktop/Olza%20Dent/src/index.css) и [`tailwind.config.cjs`](/Users/ruslanzlobin/Desktop/Olza%20Dent/tailwind.config.cjs).

## Что уже учтено

- Все CTA ведут в WhatsApp.
- Телефонные ссылки настроены на `tel:`.
- Есть sticky-кнопка WhatsApp на мобильных.
- Карта оформлена как блок с адресом и кнопкой маршрута.
