import { defineStore } from 'pinia'

export const useIds = defineStore('id', {
  state: () => ({
    id: 0
  }),
  actions: {
    setId(id: number) {
      this.id = id
    }
  }
})
