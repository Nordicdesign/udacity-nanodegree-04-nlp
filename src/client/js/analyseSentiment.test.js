import analyseSentiment from './analyseSentiment'
import "regenerator-runtime/runtime.js" // to bring async to babel

test("Articles get analysed", async () => {
  expect(analyseSentiment).toBeDefined()
  // arrange
  const url = 'http://blogpost.com'
  const expectedResponse = { 'subjectivity': 'OBJECTIVE' }
  // mock the api
  const analyse = jest.fn(() => {
    return {
      status: 'mock',
      data: []
    }
  })
  // // set what response we want for the next call
  const returnedValue = {
    'subjectivity': 'OBJECTIVE'
  }
  analyse.mockReturnValueOnce(returnedValue)
  // act
  const analysis = await analyse(url)
  // assertion
  expect(analysis).toEqual(expectedResponse)
})
