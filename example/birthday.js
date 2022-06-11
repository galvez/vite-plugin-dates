import birthday from 'dates:1986/03/05'

document.body.innerHTML = `<p>My birthday is <b>${
  new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(birthday)
}</b>.</p>`
