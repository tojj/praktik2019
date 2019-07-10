import React from 'react'

/**
 * Takes the following props:
 * - Payee: Who will recieve the payment
 * - Amount: Payment size
 * - Message: Message to send with payment
 */

const SwishCode = props => {
  const payee = props.payee ? String(props.payee) : '0708358158'
  const amount = props.amount ? String(props.amount) : '100'
  const message = props.message ? '' + props.message : 'Kalas saknas'
  const link = `http://chart.apis.google.com/chart?cht=qr&chs=500x500&chl=C${payee + ";" + amount + ";" + message + ";0"}&chf=bg,s,65432100`
  return (
    <div style={{
      background: 'linear-gradient(to top right, #4BCF6D, #10BEDC)',
      padding: '10%',
      filter: 'invert(1)'
    }}>
      <div style={{
        backgroundColor: '#000',
        mixBlendMode: 'multiply',
        borderRadius: '5px',
        overflow: 'hidden'

      }}>
        <figure
          style={{
            position: 'relative',
            margin: 0,
            filter: 'invert(1)',

          }}>
          <img
            src={link}
            style={{
              position: 'absolute',
              width: '120%',
              left: '-10%',
              top: '-10%',
            }}
            alt="qr-code - scan to use"
          />
          <img
            src={link}
            style={{
              width: '100%',
              visibility: 'hidden'
            }}
            alt="qr-code - scan to use"
          />
          {/* <img
        src="/images/favicon.png"
        style={{
          width: '50px',
          position: 'absolute',
          top: 125,
          left: 125
        }}
      /> */}
        </figure>
      </div>
    </div>

  )
}

export default SwishCode