import Projector from '../../../public/image/projector.svg'
import WebCam from '../../../public/image/webcam.svg'
import Catering from '../../../public/image/catering.svg'
import Tea from '../../../public/image/tea.svg'
import Water from '../../../public/image/water.svg'
import Coffee from '../../../public/image/coffee.svg'
import Board from '../../../public/image/board.png'

export const inputSettings = [
  {
    type: 'datetime-local',
    name: 'startDateTime',
    text: 'Start Date and Time:',
  },
  {
    type: 'datetime-local',
    name: 'endDateTime',
    text: 'End Date and Time:',
  },
  {
    text: 'Guests:',
    type: 'number',
    label: 'Guests number',
    name: 'guestsCount',
  },
]

export const checkboxSettings = [
  {
    type: 'checkbox',
    name: 'projector',
    src: Projector,
    text: 'Projector',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'webCam',
    src: WebCam,
    text: 'Web Camera',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'board',
    src: Board,
    text: 'Board',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'catering',
    src: Catering,
    text: 'Catering',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'coffee',
    src: Coffee,
    text: 'Coffee',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'tea',
    src: Tea,
    text: 'Tea',
    color: 'primary',
  },
  {
    type: 'checkbox',
    name: 'water',
    src: Water,
    text: 'Water',
    color: 'primary',
  },
]

export const radioSettings = [
  {
    type: 'radio',
    value: 'Interview',
    label: 'Interview',
    color: 'primary',
  },
  {
    type: 'radio',
    value: 'Presentation',
    label: 'Presentation',
    color: 'primary',
  },
  {
    type: 'radio',
    value: 'Meeting',
    label: 'Meeting',
    color: 'primary',
  },
  {
    type: 'radio',
    value: 'Webinar',
    label: 'Webinar',
    color: 'primary',
  },
]
