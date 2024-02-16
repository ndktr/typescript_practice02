import { expect, test } from 'vitest'

test('test', () => {
  expect(1).toBe(1)
})

test('test-failure', () => {
  expect(1).toBe(2)
})