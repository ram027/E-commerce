import React  from 'react'

const FirebaseContext=React.createContext(null)

export const provideFirebase=Component=>props=>(
    <FirebaseContext.Consumer>
        {firebase=><Component {...props} firebase={firebase}  />}
    </FirebaseContext.Consumer>
)

export default FirebaseContext