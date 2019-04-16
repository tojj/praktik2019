/**
 * MÅSTE ALLTID VARA STORA BOKSTÄVER PÅ ACTIONS
 * ANNARS FUNKAR DET INTE
 */

export const ACTION_UPDATE_BIRTHDAY = 'ACTION_UPDATE_BIRTHDAY'
export const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY'

export const ACTION_UPDATE_IMAGE = 'ACTION_UPDATE_IMAGE'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'

export const updateBirthday = data => ({
  type: ACTION_UPDATE_BIRTHDAY,
  data
})

export const doUpdateBirthday = (data) => ({
  type: UPDATE_BIRTHDAY,
  data
})

export const updateImage = data => ({
  type: ACTION_UPDATE_IMAGE,
  data
})

export const updateTheImage = (data) => ({
  type: UPDATE_IMAGE,
  data
})