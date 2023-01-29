import React from 'react'
import Counter from './Error-Boundary/Counter'
import ErrorBoundary from './Error-Boundary/ErrorBoundary'

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Counter/>
        <Counter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
        
      </ErrorBoundary>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
    </div>
  )
}
