import { useCallback } from 'react'

interface PerformSmoothStateChangeArguments<StateType> {
  stateValues: Array<StateType>
  stepDelayInMs: number
}

interface UseSmoothStateChangeArguments<StateType> {
  setStateFunction: (value: StateType) => void
}

const useSmoothStateChange = <StateType>({
  setStateFunction,
}: UseSmoothStateChangeArguments<StateType>) => {
  const performSmoothStateChange = useCallback(
    ({
      stateValues,
      stepDelayInMs,
    }: PerformSmoothStateChangeArguments<StateType>) => {
      stateValues.map((stateValue, index) => {
        const currentStepDelay = stepDelayInMs * index

        return setTimeout(() => {
          setStateFunction(stateValue)
        }, currentStepDelay)
      })
    },
    [setStateFunction],
  )

  return { performSmoothStateChange }
}

export default useSmoothStateChange
