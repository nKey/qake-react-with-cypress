/// <reference types="cypress" />
import React from 'react'
import './App.css'
import App from './App'
import * as Location from './Location'
import { getLocation } from './Location'

it('component testing - shows the location host and path', () => {
  cy.stub(Location, 'getLocation')
    .returns({
      hostname: 'cy-test',
      pathname: '/App',
    })
    .as('getLocation')
  cy.mount(<App />)
  console.log('A')
  console.log('A')
  cy.get('[data-cy=location]').contains('cy-test /App')
  cy.contains('[data-cy=location]', 'cy-test /App')
  cy.get('@getLocation').should('have.been.calledOnce')
})

it('unit testing - shows the location host and path', () => {
  const location = getLocation()
  console.log('B')
  console.log('A')
  expect(location.hostname).to.be.equals('localhost')
  expect(location.pathname).to.contains('src/App.cy.js')
})
