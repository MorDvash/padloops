export default {
  addPadToAudio: (state, pad) => {
    state.audioPlay.push(pad)
  },
  addPads: (state, pads) => {
    pads.forEach(pad => state.padsButton.push(pad))
  },
  activeUnActivePad: (state, padsData) => {
    state.padsButton[padsData.index].active = padsData.status
  },
  removePad: (state, pad) => {
    const index = state.audioPlay.findIndex(p => p.name === pad.name)
    state.audioPlay.splice(index, 1)
  },
  onRecord:(state) =>{
    state.record = !state.record
  }
}

