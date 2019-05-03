/**
 * MÅSTE ALLTID VARA STORA BOKSTÄVER PÅ ACTIONS
 * ANNARS FUNKAR DET INTE
 */

export const ACTION_UPDATE_BIRTHDAY = 'ACTION_UPDATE_BIRTHDAY'
export const ACTION_UPDATE_TIME_AND_PLACE = 'ACTION_UPDATE_TIME_AND_PLACE'
export const ACTION_UPDATE_IMAGE = 'ACTION_UPDATE_IMAGE'
export const ACTION_UPDATE_PRODUCT_INFO = 'ACTION_UPDATE_PRODUCT_INFO'


export const ACTION_UPDATE_GUEST_USER_DETAILS = 'ACTION_UPDATE_GUEST_USER_DETAILS'
export const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY'
export const UPDATE_TIMEANDPLACE = 'UPDATE_TIMEANDPLACE'
export const UPDATE_GUEST_USER_DETAILS = 'UPDATE_GUEST_USER_DETAILS'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const UPDATE_PRODUCT_INFO = 'UPDATE_PRODUCT_INFO'






export const updateBirthday = data => ({
  type: ACTION_UPDATE_BIRTHDAY,
  data
})

export const doUpdateBirthday = (data) => ({
  type: UPDATE_BIRTHDAY,
  data
})

export const updateImage = (data) => ({
  type: UPDATE_IMAGE,
  data
})

/**
 * Action for updating information in EventInput component
 */

export const updateBdayTimeAndPlace = data => ({
  type: ACTION_UPDATE_TIME_AND_PLACE,
  data
})

export const updateBirthdayTimeAndPlace = data => ({
  type: UPDATE_TIMEANDPLACE,
  data
})


/**
 * Action for updating information in Web shop component
 */
export const updateProductInfo = data => ({
  type: ACTION_UPDATE_PRODUCT_INFO,
  data
})

export const doUpdateProductInfo = data => ({
  type: UPDATE_PRODUCT_INFO,
  data
})

/**
 * Action for updating information in Guest Details component
 */

export const updateGuestDetails = data => ({
  type: ACTION_UPDATE_GUEST_USER_DETAILS,
  data
})

export const doUpdateGuestDetails = data => ({
  type: UPDATE_GUEST_USER_DETAILS,
  data
})