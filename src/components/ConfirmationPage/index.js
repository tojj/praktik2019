import React from 'react'
import { Minus } from 'react-feather'
import BirthdayInvite from '../BirthdayInvite'

const ConfirmationPage = () => {
  return (
    <div className="conf-wrapper bg-white">
      <h1 className="conf-headline">Grattis ditt kalas är skapat!</h1>
      <p className="conf-info"><Minus/>Här har du din länk till ditt kalas: </p>
      <p className="conf-info"><Minus/>Nedanstående kan du bjuda in personer till kalaset, detta är givetvis valfritt. </p>
      <BirthdayInvite />
    </div>
  )
}

export default ConfirmationPage