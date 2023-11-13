import React, { Children, Component, createContext } from 'react';

const RootContext = createContext();
//provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class parentComp extends Component {
            //context
            state = {
                totalOrder: 0
            }
            dispatch = (action) => {
                if (action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'MINUS_ORDER') {
                    let totalorder = 0;
                    if (this.state.totalOrder > 0) {
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    } else {
                        return this.setState({
                            totalOrder: totalorder
                        })
                    }


                }
            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider >
                )
            }
        }
    )
}

export default GlobalProvider;
//konsumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props}{...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}