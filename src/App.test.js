import React from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import App from './App'
import {fetchShow as mockFetchShow} from './api/fetchShow'
jest.mock('./api/fetchShow.js')

test('render App without errors', ()=> {
  render(<App/>)
})