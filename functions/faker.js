import vesselNames from '~/static/vessel-names.json'

export class Faker {
  static number(min = 0, max = 1000) {
    return Math.floor(Math.random() * max) + min
  }

  static vesselName() {
    return vesselNames[Math.floor(Math.random() * vesselNames.length)]
  }

  static id() {
    return Date.now() + this.number(10000, 5000)
  }

  static array(array) {
    return array[Math.floor(Math.random() * array.length)]
  }

  static date(format) {
    const date = new Date()

    // https://en.wikipedia.org/wiki/Date_format_by_country
    const map = {
      mm: date.getMonth()+1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
  }

  static letters(min, max) {
    const alphabet = Array.from(Array(26)).map((e, i) => i + 65).map((x) => String.fromCharCode(x))
    let res = ''
    for (let i = 0; i < this.number(min, max); i++) {
      res += this.array(alphabet)
    }
    return res
  }

  static boolean() {
    return Math.random() < 0.5
  }
}
