import React, { FunctionComponent } from 'react'

type AppProps = {}

const App: FunctionComponent<AppProps> = (props) => {
  return (
    <div
      className="bg-gray-200 h-screen w-screen"
      style={{ display: 'grid', placeItems: 'center' }}
    >
      <div className="text-center">
        <div className="text-6xl font-bold text-gray-900 text-opacity-25 ">
          It Works!
        </div>
        <div className="text-gray-900 text-opacity-25">Go build a thing.</div>
      </div>
    </div>
  )
}

export default App
