import { Faker } from '~/functions/faker'

export const state = () => ([])

export const getters = {
  getExpectedVessels: (state) => {
    return state
  },

  getIdLists: (state) => {
    let ids = state.map(({ id }) => id)
    const half = Math.ceil(ids.length / 2);
    const firstHalf = ids.slice(0, half)
    const secondHalf = ids.slice(-half)
    return [firstHalf, secondHalf]
  }
}

export const mutations = {
  generate(state) {
    if (state.length === 0) {
      for (let i = 0; i < Faker.number(5, 10); i++) {
        state.push(generateVessel())
      }
    }
  }
}

const V   = 'vessel'
const AV  = 'autonomous vessel'
const SAV  = 'semi autonomous vessel'

function generateVessel() {
  return {
    id:         Faker.id(),
    type:       Faker.array([V, AV, SAV]),
    eta:        Faker.date(`dd-mm ${Faker.number(0, 24)}:${Faker.number(0, 60)}`),
    name:       Faker.vesselName(),
    berth:      Faker.letters(3, 5),
    mooring:    `? ? ${Faker.array(['U','S','P','?'])}`,
    b:          Faker.array([' ', 'B']),
    t:          Faker.array([' ', '1', '2']),
    p:          Faker.array([' ', 'P']),
    loa:        `${Faker.number(10, 99)}.${Faker.number(10, 99)}`,
    boa:        `${Faker.number(0, 9)}.${Faker.number(10, 99)}`,
    draft:      `${Faker.number(0, 9)}.${Faker.number(10, 99)}`,
    h:          Faker.boolean(),
    award:      Faker.boolean(),
    recycle:    Faker.boolean(),
    paperclip:  Faker.boolean(),
    edit:       Faker.boolean(),
  }
}
