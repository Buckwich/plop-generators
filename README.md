# plop-generators

A collection of code generators using [Plop](https://plopjs.com/).

## Available Generators

### Angular

#### Angular Component Generator

Generate a new Angular component with all necessary files (component, template, styles, and spec).

**Usage:**
```bash
plop angular:component
```

**Prompts:**
- **Component name**: The name of the component (e.g., `button`, `user-profile`)
- **Path**: The directory where the component should be created (default: `src/app/components`)
- **Create spec file**: Whether to generate a `.spec.ts` test file (default: `true`)

**Generated Files:**
- `component-name.component.ts` - Component class
- `component-name.component.html` - Component template
- `component-name.component.scss` - Component styles
- `component-name.component.spec.ts` - Unit tests (optional)

**Example:**
Creating a component named `user-card` will generate:
- `src/app/components/user-card/user-card.component.ts`
- `src/app/components/user-card/user-card.component.html`
- `src/app/components/user-card/user-card.component.scss`
- `src/app/components/user-card/user-card.component.spec.ts`

### Vue

#### Vue Component Generator

Generate a new Vue 3 Single File Component with TypeScript support and optional tests.

**Usage:**
```bash
plop vue:component
```

**Prompts:**
- **Component name**: The name of the component (e.g., `Button`, `UserProfile`)
- **Path**: The directory where the component should be created (default: `src/components`)
- **Create spec file**: Whether to generate a `.spec.ts` test file (default: `true`)

**Generated Files:**
- `ComponentName.vue` - Vue component with script setup
- `ComponentName.spec.ts` - Vitest unit tests (optional)

#### Vue Composable Generator

Generate a new Vue composable for the Composition API.

**Usage:**
```bash
plop vue:composable
```

**Prompts:**
- **Composable name**: The name of the composable (e.g., `useFetch`, `useForm`)
- **Path**: The directory where the composable should be created (default: `src/composables`)

**Generated Files:**
- `composableName.ts` - Composable function with reactive state

**Example:**
Creating a composable named `useFetch` will generate:
- `src/composables/useFetch.ts`

#### Vue Store Generator

Generate a new Pinia store.

**Usage:**
```bash
plop vue:store
```

**Prompts:**
- **Store name**: The name of the store (e.g., `user`, `product`)
- **Path**: The directory where the store should be created (default: `src/stores`)

**Generated Files:**
- `storeName.ts` - Pinia store with state, getters, and actions

**Example:**
Creating a store named `user` will generate:
- `src/stores/user.ts`