import { renderHook, act } from '@testing-library/react-hooks'

import { useLocalStorage } from '.'

describe('useLocalStorage', () => {
  it('should return value localStorage and confirm value', async () => {
    const { result } = renderHook(() => useLocalStorage('teste'))

    expect(result.current[0]).toEqual(undefined)

    act(() => {
      result.current[1]('teste 1')
    })

    expect(result.current[0]).toEqual('teste 1')

    const { result: resultConfirm } = renderHook(() =>
      useLocalStorage<any>('teste')
    )

    expect(resultConfirm.current[0]).toEqual('teste 1')
  })
})
