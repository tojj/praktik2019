/**
 * MÅSTE ALLTID VARA STORA BOKSTÄVER PÅ ACTIONS
 * ANNARS FUNKAR DET INTE
 */

export const ACTION_UPDATE_BIRTHDAY = 'ACTION_UPDATE_BIRTHDAY'
export const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY'

export const updateBirthday = data => ({
  type: ACTION_UPDATE_BIRTHDAY,
  data
});

export const doUpdateBirthday = (data) => ({
  type: UPDATE_BIRTHDAY,
  data
})
