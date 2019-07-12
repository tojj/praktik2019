import partialState from "./partialState"
import { UPDATE_USERAGREEMENT, UPDATE_GDPRAGREEMENT } from "./AgreementActions"

export default function(state = partialState.agreement, action) {
  switch (action.type) {
    case UPDATE_USERAGREEMENT:
      return { ...state, agreement: action.data }

    case UPDATE_GDPRAGREEMENT:
      return { ...state, agreement: action.data }

    default:
      return state
  }
}
