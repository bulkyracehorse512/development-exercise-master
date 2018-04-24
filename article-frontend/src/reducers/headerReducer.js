const initialState = {
  contactModalOpen: false,
  mobile: true,
  error: null
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'WHATEVER':
      return {
        ...state,
        contactModalOpen: true,
      }
    default:
      return state;
  }
}
