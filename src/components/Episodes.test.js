import React from 'react'
import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import {fetchShow as mockFetchShow} from '../api/fetchShow'
import Episodes from './Episodes'

jest.mock('../api/fetchShow.js')

test('render Episodes without errors', ()=> { 
  const episodes = [
    {
      id: 553946,
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      type: "regular",
      runtime: 60,
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"
      },
      summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
    },
    {
      id: 578663,
      name: "Chapter Two: The Weirdo on Maple Street",
      season: 1,
      number: 2,
      type: "regular",
      runtime: 60,
      image: {
        medium: "http://static.tvmaze.com/uploads/images/medium_landscape/72/181376.jpg"
      },
      summary: "<p>While the search for the missing Will continues, Joyce tells Jim about a call she apparently received from her son. Meanwhile, Jane warns Mike that there are bad people after her, and he realizes that she knows what happened to Will.</p>"
    }
  ]
  
  render(<Episodes episodes={episodes}/>)
  const episodeList = screen.getAllByTestId('episode')
  expect(episodeList).toHaveLength(2)
})



  // mockFetchShow.mockResolvedValueOnce({
  //   episodes:

  // }

  // )
  // console.log('mrv',mockFetchShow.mockResolvedValueOnce();