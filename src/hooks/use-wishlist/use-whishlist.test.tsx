import { renderHook, act } from '@testing-library/react-hooks'

import { WishlistProvider, useWishlist } from '.'

describe('useWishlist', () => {
  afterEach(() => {
    window.localStorage.clear()
  })

  it('should remove item in wishlist', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <WishlistProvider>{children}</WishlistProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    expect(result.current.isInWishlist('1')).toBe(false)

    act(() => {
      result.current.addToWishlist('1')
    })

    expect(result.current.isInWishlist('1')).toBe(true)

    act(() => {
      result.current.removeFromWishlist('1')
    })

    expect(result.current.isInWishlist('1')).toBe(false)
  })

  it('should add item in wishlist', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <WishlistProvider>{children}</WishlistProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    act(() => {
      result.current.addToWishlist('2')
    })

    expect(result.current.items).toEqual([{ id: '2' }])
  })

  it('should add item two equal id not replicate in wishlist', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <WishlistProvider>{children}</WishlistProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    act(() => {
      result.current.addToWishlist('2')
    })
    act(() => {
      result.current.addToWishlist('2')
    })
    act(() => {
      result.current.addToWishlist('3')
    })

    expect(result.current.items).toEqual([{ id: '2' }, { id: '3' }])
  })

  it('should checked isInWishlist', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <WishlistProvider>{children}</WishlistProvider>
    )

    const { result } = renderHook(() => useWishlist(), { wrapper })

    expect(result.current.isInWishlist('1')).toBe(false)

    act(() => {
      result.current.addToWishlist('1')
    })

    expect(result.current.isInWishlist('1')).toBe(true)
  })
})
