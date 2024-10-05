import { defineStore } from 'pinia'

export const useChoice = defineStore('choice', {
  state: () => ({
    first: '',
    second: ''
  }),
  actions: {
    setFirst(dep: string) {
      this.first = dep
    },
    setSecond(dep: string) {
      this.second = dep
    }
  }
})
