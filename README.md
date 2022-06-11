# vite-plugin-dates

A [Vite](https://vitejs.dev/) alternative to [Anton Medvedev](https://medv.io/)'s [@year packages](https://github.com/antonmedv/year/tree/master/packages).

Built [as an example for a blog post covering virtual modules](https://hire.jonasgalvez.com.br/2022/jun/10/virtual-modules-for-fun-and-profit).

## Install

```bash
npm i vite-plugin-dates -D
```

## Configuration

```js
import { dirname } from 'path'
import viteDates from 'vite-plugin-dates'

export default {
  root: dirname(new URL(import.meta.url).pathname),
  plugins: [viteDates()],
}
```

## Usage

```js
import birthday from 'dates:1986/03/05'

document.body.innerHTML = `<p>My birthday is <b>${
  new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(birthday)
}</b>.</p>`
```

## License

MIT
