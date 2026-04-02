# Todo App — Next.js + Tailwind CSS

A feature-rich Todo application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Includes a production-ready multi-stage **Dockerfile**.

## Features

- ✅ Add, edit (double-click), and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Priority levels: Low / Medium / High
- ✅ Filter by All / Active / Completed
- ✅ Progress bar with completion stats
- ✅ Clear all completed todos at once
- ✅ Fully typed with TypeScript
- ✅ Responsive & accessible UI

---

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### Production Build

```bash
npm run build
npm start
```

---

## Docker

### Build the image

```bash
docker build -t todo-app .
```

### Run the container

```bash
docker run -p 3000:3000 todo-app
```

Open [http://localhost:3000](http://localhost:3000).

### Using Docker Compose (optional)

Create a `docker-compose.yml`:

```yaml
version: '3.8'
services:
  todo-app:
    build: .
    ports:
      - '3000:3000'
    restart: unless-stopped
```

Then run:

```bash
docker compose up --build
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── TodoApp.tsx      # Root component — state management
│   ├── TodoInput.tsx    # Add new todo with priority selector
│   ├── TodoList.tsx     # Renders the list (or empty state)
│   ├── TodoItem.tsx     # Individual todo row with edit/delete
│   ├── TodoFilter.tsx   # All / Active / Completed tabs
│   └── TodoStats.tsx    # Progress bar + counters
└── types/
    └── todo.ts          # Shared TypeScript types
```
