import React from 'react'
import Display from './Display'
import SearchButton from './SearchButton'
import PhotoCircle from './PhotoCircle'
import SearchBar from './SearchBar'
import './Container.css'

const Container = () => {
  return (
    <div className='container'>
        <h1 className='header'>ACME EMPLOYEE DATABASE</h1>
        <div className='interface'>
            <h2>Employee Information</h2>
            <Display/>
            <SearchButton/>
            <PhotoCircle/>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Container