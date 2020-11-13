import React from 'react'
import {act, fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import {fetchShow as mockFetchShow} from './api/fetchShow'

import testData from './test/testData.json'

jest.mock('./api/fetchShow.js')

test('render App without crashing ', async ()=> {
  mockFetchShow.mockResolvedValueOnce(testData)
  // Arrange
  render(<App/>)
  await waitFor( () => {
    // Act
    const movieApp = screen.getAllByTestId("app")
    // Assert
    expect(movieApp).toBeTruthy()
  })
})

test('render dropdown and click to episodes', async ()=> {
  mockFetchShow.mockResolvedValueOnce(testData)

  // Arrange:
  render(<App/>)

  // Act:
  await waitFor( () => {  
    screen.getByText(/select a season/i)
  })
  userEvent.click(screen.getByText(/select a season/i))

  const season1 = screen.getByText(/season 1/i)
 
  userEvent.click(season1)

  const episodes = await screen.findAllByTestId(/episode/i)

  // Assert:
  expect(episodes).toHaveLength(8)
   
})

test('render img', async ()=> {
  mockFetchShow.mockResolvedValueOnce(testData)

  // Arrange:
  render(<App/>)

  // Act:
  await waitFor( () => {
   screen.getByAltText(/stranger things/i) //grab the img
  })

  // Assert: 
})








// /* -------- Nate made it work when I couldn't ------- */
// test('render App without errors', async ()=> {
//   await act(async () => {
//     mockFetchShow.mockResolvedValueOnce(testData)
//     render(<App/>)

//     expect(await screen.findAllByTestId("app")).toBeTruthy()
//   })
// })