# Руководство по установке Tailwind CSS v4

## Обзор

Tailwind CSS v4 - это новая версия популярного CSS фреймворка с улучшенной производительностью и упрощенной установкой.

## Способы установки

### 1. Vite плагин (рекомендуется)

#### Шаг 1: Установка пакетов
```bash
npm install -D tailwindcss @tailwindcss/vite
```

#### Шаг 2: Настройка Vite
Создайте или обновите `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

#### Шаг 3: Добавление директивы в CSS
В `src/index.css` добавьте:
```css
@import "tailwindcss";
```

#### Шаг 4: Готово!
Запустите проект:
```bash
npm run dev
```

### 2. PostCSS плагин (альтернативный способ)

#### Шаг 1: Установка пакетов
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss
```

#### Шаг 2: Создание PostCSS конфигурации
Создайте `postcss.config.js`:
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}
```

#### Шаг 3: Добавление директивы в CSS
В `src/index.css` добавьте:
```css
@import "tailwindcss";
```

## Конфигурация (опционально)

### Создание конфигурационного файла
```bash
# Для Vite плагина
npx tailwindcss init

# Или создайте вручную tailwind.config.js
```

### Пример конфигурации
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1234567',
      }
    }
  }
}
```

## Решение проблем

### Ошибка "could not determine executable to run"
**Причина:** Проблемы с npm/npx в Windows
**Решение:**
1. Переустановите Node.js
2. Очистите кэш: `npm cache clean --force`
3. Используйте Vite плагин вместо PostCSS

### Стили не применяются
**Причина:** Конфликт с существующими CSS стилями
**Решение:**
1. Удалите конфликтующие стили из `App.css`
2. Используйте `!important` для принудительного применения
3. Проверьте порядок импорта CSS файлов

### PostCSS ошибки
**Причина:** Неправильная конфигурация PostCSS
**Решение:**
1. Удалите `postcss.config.js` и используйте Vite плагин
2. Или обновите конфигурацию PostCSS

## Тестирование установки

### Добавьте тестовые стили в компонент:
```tsx
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Tailwind CSS работает!
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Тестовая кнопка
        </button>
      </div>
    </div>
  )
}
```

### Ожидаемый результат:
- ✅ Градиентный фон
- ✅ Белая карточка с тенью
- ✅ Стилизованная кнопка
- ✅ Правильная типографика

## Рекомендации

### ✅ Используйте Vite плагин для:
- Проектов на Vite
- Простых конфигураций
- Быстрой разработки

### ✅ Используйте PostCSS плагин для:
- Специфичных PostCSS плагинов
- Сложных CSS трансформаций
- Совместимости с другими инструментами

## Полезные команды

```bash
# Проверка установленных пакетов
npm list tailwindcss @tailwindcss/vite

# Очистка кэша
npm cache clean --force

# Переустановка зависимостей
rm -rf node_modules package-lock.json
npm install

# Запуск в режиме разработки
npm run dev
```

## Источники

- [Официальная документация Tailwind CSS v4](https://tailwindcss.com/docs/installation/using-postcss)
- [Руководство по Vite плагину](https://tailwindcss.com/docs/installation/using-vite)

---

**Примечание:** Данное руководство основано на опыте решения проблем с установкой Tailwind CSS v4 в Windows среде. 