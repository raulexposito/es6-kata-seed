import test from 'tape'
import sum from '../src/adder'

test('1 + 1 must be 2', expect => {
  const result = sum(1, 1)
  expect.equal(result, 2)
  expect.end()
})
