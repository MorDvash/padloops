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
    if (index !== -1) {
      state.audioPlay.splice(index, 1)
    }
  },
  onRecord: (state) => {
    state.record = !state.record
  },
  addAudioRecord: (state, pad) => {
    state.audioRecord.push(pad)
  },
  removeAudioRecord: (state, pad) => {
    const index = state.audioRecord.findIndex(p => p.name === pad.name)
    if (index !== -1) {
      state.audioRecord.splice(index, 1)
    }
  },
  deleteRecord: (state) => {
    state.audioRecord=[]
  }
}

