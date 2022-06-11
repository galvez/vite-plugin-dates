function viteDates () {
  const prefix = /^\/?dates:/

  return {
    name: 'vite-plugin-dates',
    async resolveId (id) {
      const [, date] = id.split(prefix)
      if (date) {
        if (isNaN(Date.parse(date))) {
          throw new Error('Trying to load an invalid date')
        }
        return id
      }
    },
    load (id) {
      const [, date] = id.split(prefix)
      if (date) {
        return {
          code: `export default new Date('${date} 00:00:00 UTC')`,
          map: null,
        }
      }
    },
  }
}

module.exports = viteDates
