import React, {Fragment} from 'react'
import Button from 'mono-components/Button'
import Header from './components/Header'
// import ClassTest from './components/ClassTest'

export default () => (
  <Fragment>
    <Header />
    <div>Body text</div>
    <Button green>Click ME</Button>
    {/* <ClassTest /> */}
  </Fragment>
)
