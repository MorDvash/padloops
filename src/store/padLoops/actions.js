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
}
