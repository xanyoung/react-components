import React from 'react'

type Props = {
    exampleProp : string
}

const FunctionComponent = (props: Props) => {   
    return (
    <div>
        <p>Hello {props.exampleProp}!</p>
    </div>
  )
}

export default FunctionComponent
