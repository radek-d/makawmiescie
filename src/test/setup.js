import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock IntersectionObserver
class IntersectionObserverMock {
  constructor() {}
  observe() { return null }
  unobserve() { return null }
  disconnect() { return null }
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

// Mock ResizeObserver
class ResizeObserverMock {
  constructor() {}
  observe() { return null }
  unobserve() { return null }
  disconnect() { return null }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
