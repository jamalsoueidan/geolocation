import React from 'react'

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    ...go through dispatches
  }

  render() {
    return(<div className="loading">Loading...</div>)
  }
}


<Loader actions=[() => loader({'a': 'a'})] />

// every request gets new requestID
// loader needs to know when api is succcess to show children?
// reducer converts to models
//
