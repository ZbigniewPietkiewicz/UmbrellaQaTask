# frontend

Test task from Umbrella limited

Demo: [umbrella.viia.dev](https://umbrella.viia.dev)
- used `scss` for styles - in components,
- used `vitest` with `test-utils` for test suite
- tested on `node@16` and `node@18`

## important notes

- Copy `.env` to `.env.local` and set API url before build.
- Remember to set up proper cors on backend respopnses, for example:
```typescript
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000'],
  })
//...
}
```



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
