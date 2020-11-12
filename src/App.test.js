import React from 'react'
import {act, fireEvent, render, screen, waitFor} from '@testing-library/react'
import App from './App'
import {fetchShow as mockFetchShow} from './api/fetchShow'

import testData from './test/testData.json'

jest.mock('./api/fetchShow.js')


test('render App without errors', async ()=> {
  mockFetchShow.mockResolvedValueOnce(testData)
  render(<App/>)
  await waitFor( () => {
    const movieApp = screen.getAllByTestId("app")
    expect(movieApp).toBeTruthy()
  })
})



// /* -------- Nate made it work when I couldn't ------- */
// test('render App without errors', async ()=> {
//   await act(async () => {
//     mockFetchShow.mockResolvedValueOnce(testData)
//     render(<App/>)

//     expect(await screen.findAllByTestId("app")).toBeTruthy()
//   })
// })