import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
  state: () => ({
    name: '',
    dob: new Date(),
    gender: 'Nam',
    highSchool: '',
    major: '',
    phoneNumber: '',
    email: '',
    facebook: '',
    avatar: '',
    extracurriculars: '',
    strengthsWeaknesses: '',
    uniqueness: '',
    futurePlans: '',
    photoThoughts: ''
  }),
  actions: {
    setName(name: string) {
      this.name = name
    },
    setDob(dob: Date) {
      this.dob = dob
    },
    setGender(gender: string) {
      this.gender = gender
    },
    setHighSchool(highSchool: string) {
      this.highSchool = highSchool
    },
    setMajor(major: string) {
      this.major = major
    },
    setPhoneNumber(phoneNumber: string) {
      this.phoneNumber = phoneNumber
    },
    setEmail(email: string) {
      this.email = email
    },
    setFacebook(facebook: string) {
      this.facebook = facebook
    },
    setAvatar(avatar: string) {
      this.avatar = avatar
    },
    setExtracurriculars(extracurriculars: string) {
      this.extracurriculars = extracurriculars
    },
    setStrengthsWeaknesses(strengthsWeaknesses: string) {
      this.strengthsWeaknesses = strengthsWeaknesses
    },
    setUniqueness(uniqueness: string) {
      this.uniqueness = uniqueness
    },
    setFuturePlans(futurePlans: string) {
      this.futurePlans = futurePlans
    },
    setPhotoThoughts(photoThoughts: string) {
      this.photoThoughts = photoThoughts
    }
  }
})
