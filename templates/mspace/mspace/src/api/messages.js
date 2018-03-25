import { HTTP } from './common'

export const Messages = {
  create (config) {
    return HTTP.post('/messages/', config).then(response => {
      return response.data
    })
  },
  delete (messages) {
    return HTTP.delete(`/messages/${messages.id}/`)
  },
  list () {
    return HTTP.get('/messages/').then(response => {
      return response.data
    })
  }
}
