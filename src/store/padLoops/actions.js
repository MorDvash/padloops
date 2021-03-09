import { Notify } from 'quasar'

export default {
  musicStatus: ({commit} , data) => {
    if (data.status === 0) {
      data.musicPlay.forEach(loop => {
        loop.play()
      })
    } else {
      data.musicPlay.forEach(loop => {
        loop.pause()
      })
    }
  },
  recording: ({commit , state}) => {
    if (state.record) {
      Notify.create({
        message: 'Recording stopped',
        color: 'dark',
        timeout: '1000'
      })
    } else {
      Notify.create({
        message: 'Recording',
        color: 'dark',
        timeout: '1000'
      })
    }
    commit('onRecord')
  },
  playRecord: ({commit , state,dispatch}) => {
    if (!state.isPlayingRecord) {
      state.audioRecord.forEach((loop, i) => {
        setTimeout(() => {
          loop.play();
        }, i * 8000);
      })
      commit('isPlayingRecordStatus')
    }else {
      dispatch('musicStatus' , {status : 1, musicPlay: state.audioRecord})
      commit('deleteRecord')
      commit('isPlayingRecordStatus')
    }
  }
}
