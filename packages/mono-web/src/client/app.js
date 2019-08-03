import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'

const mountPoint = document.getElementById('mount-point')
ReactDOM.render(<Home/>, mountPoint, () => console.log('DONE'))
