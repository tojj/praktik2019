export const ACTION_UPDATE_USERAGREEMENT = "ACTION_UPDATE_USERAGREEMENT"
export const ACTION_UPDATE_GDPRAGREEMENT = "ACTION_UPDATE_GDPRAGREEMENT"
export const UPDATE_USERAGREEMENT = "UPDATE_USERAGREEMENT"
export const UPDATE_GDPRAGREEMENT = "UPDATE_GDPRAGREEMENT"

export const updateUserAgreement = data => ({
  type: UPDATE_USERAGREEMENT,
  data
})

export const doupdateUserAgreement = data => ({
  type: ACTION_UPDATE_USERAGREEMENT,
  data
})

export const updateGdprAgreement = data => ({
  type: UPDATE_GDPRAGREEMENT,
  data
})

export const doupdateGdprAgreement = data => ({
  type: ACTION_UPDATE_GDPRAGREEMENT,
  data
})
