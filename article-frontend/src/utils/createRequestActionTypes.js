const RequestActionTypes = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

export default function createRequestActionTypes(baseStr) {
  const action = new String(baseStr)
  const steps = [RequestActionTypes.REQUEST, RequestActionTypes.SUCCESS, RequestActionTypes.FAILURE]
  steps.forEach(type => (action[type] = `${base}_${type}`))
  return action
}
