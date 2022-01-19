import { Faker } from '~/functions/faker'

export const state = () => ({
  // List of all vessels with all the data of a vessel included
  vessels: [],

  // List of only the ids of vessels that are in port
  inPortVesselsIds: [],

  // List of only the ids of vessels that are expected
  expectedVesselIds: [],
})

export const getters = {
  getExpectedVessels: (state) => {
    let vessels = []
    state.expectedVesselIds.forEach((id) => {
      vessels.push(state.vessels.find(vessel => vessel.id === id))
    })
    return vessels
  },

  getInPortVessels: (state) => {
    let vessels = []
    state.inPortVesselsIds.forEach((id) => {
      vessels.push(state.vessels.find(vessel => vessel.id === id))
    })
    return vessels
  },

  getExpectedVesselIds: (state) => {
    return state.expectedVesselIds
  },

  getInPortVesselIds: (state) => {
    return state.expectedVesselIds
  },

  getIdLists: (state) => {
    let ids = state.vessels.map(({ id }) => id)
    const half = Math.ceil(ids.length / 2);
    const firstHalf = ids.slice(0, half)
    const secondHalf = ids.slice(-half)
    return [firstHalf, secondHalf]
  }
}

export const mutations = {
  generate(state) {
    if (state.vessels.length === 0) {
      for (let i = 0; i < Faker.number(5, 10); i++) {
        state.vessels.push(generateVessel())
      }
    }
  },

  setInPortVesselIds(state, ids) {
    if (state.inPortVesselsIds.length === 0) {
      ids.forEach((id) => {
        state.inPortVesselsIds.push(id)
      })
    }
    console.log('abcd')
    console.log(ids)
    // state.inPortVesselsIds = ids
  },

  setExportedVesselIds(state, ids) {
    if (state.expectedVesselIds.length === 0) {
      ids.forEach((id) => {
        state.expectedVesselIds.push(id)
      })
    }
    console.log('xyz')
    console.log(ids)
    // state.expectedVesselIds = ids
  }
}

const V   = 'vessel'
const AV  = 'autonomous vessel'
const SAV  = 'semi autonomous vessel'

function generateVessel() {
  return {
    // List
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

    // Property window
    cargo:      Faker.number(0, 4000),
    autopilot: Faker.boolean(),

  }
}
