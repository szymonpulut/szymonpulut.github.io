interface Arguments<StateType> {
  setStateFunction: (value: StateType) => void
  stateValues: Array<StateType>
  stepDelayInMs: number
}

const useSmoothStateChange = <StateType>({ setStateFunction, stateValues, stepDelayInMs }: Arguments<StateType>) => {
  stateValues.map((stateValue, index) => {
    const currentStepDelay = stepDelayInMs * index

    return setTimeout(() => {
      setStateFunction(stateValue)
    }, currentStepDelay)
  })

  return undefined
}

export default useSmoothStateChange
