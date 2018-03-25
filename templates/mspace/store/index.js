import Vue from 'vue'
import Vuex from 'vuex'
import { Messages } from '../api/messages'
import {
  ADD_MESSAGE,
  REMOVE_MESSAGE,
  SET_MESSAGE
} from './mutation-types.js'

Vue.use(Vuex)


const state = {
  messages: []
}

const getters = {
  messages: state => state.messages
}


const mutations = {

  [ADD_MESSAGE] (state, messages) {
    state.messages = [messages, ...state.messages]
  },

  [REMOVE_MESSAGE] (state, { id }) {
    state.messages = state.messages.filter(messages => {
      return messages.id !== id
    })
  },

  [MARK_MESSAGE] (state, { messages }) {
    state.messages = messages
  }
}


const actions = {
  createMessage ({ commit }, messageData) {
    Messages.create(messageData).then(messages => {
      commit(ADD_MESSAGE, messages)
    })
  },
  deleteMessage ({ commit }, messages) {
    Messages.delete(messages).then(response => {
      commit(REMOVE_MESSAGE, messages)
    })
  },
  getMessage ({ commit }) {
    Messages.list().then(messages => {
      commit(SET_MESSAGE, { messages })
    })
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})