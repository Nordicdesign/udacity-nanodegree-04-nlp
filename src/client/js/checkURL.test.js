import checkURL from './checkURL'

test('Good URL are accepted', () => {
  const url = 'https://www.google.com'
  expect(checkURL(url)).toBeTruthy()
})
