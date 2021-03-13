import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.style'

const withSpinner = (WrappedComponent) => {
    class Spinner extends React.Component {
        render() {
            const { isLoading, ...otherProps } = this.props
            console.log("isLoading", isLoading)
            return (
                isLoading ? (
                    <SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay>
                ) : (
                        <WrappedComponent {...otherProps} />
                    )

            )
        }
    }
    return Spinner;
}

export default withSpinner;