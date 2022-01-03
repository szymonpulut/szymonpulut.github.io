const useInWindow = (functionToExecute: () => void) => {
  if (typeof document !== 'undefined') {
    functionToExecute()
  }
}

export default useInWindow
