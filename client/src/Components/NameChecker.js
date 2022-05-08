import React, { useState } from 'react'
import { useEffect } from 'react'

const NameChecker = () => {
  const [name, setname] = useState('')
  const [result, setresult] = useState(true)

  const nameCheck = (name) => {
    const nameRegex = /^[a-zA-Z ]{2,40}$/
    if (nameRegex.test(name)) {
      setresult(true)
    } else if (name.includes('--')) {
      setresult(false)
    } else {
      setresult(false)
    }
  }

  useEffect(() => {
    nameCheck(name)
  }, [name])

  return (
    <>
      <input
        style={{
          margin: '10px',
          height: '50px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '0 10px',
        }}
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter your name"
      />
      <h1
        style={{
          color: 'blue',
          margin: '10px',
          padding: '0 10px',
        }}
        date-tested="button"
      >
        {name}
      </h1>
      <h1
        style={{
          color: 'red',
          margin: '10px',
          padding: '0 10px',
        }}
        date-tested="button"
      >
        {result ? 'Valid' : 'Invalid'}
      </h1>
    </>
  )
}

export default NameChecker
