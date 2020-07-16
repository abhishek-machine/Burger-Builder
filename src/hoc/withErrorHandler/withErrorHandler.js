import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Auxiliary/Auxiliary';
import axios from "../../axios-orders";

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,

        }

        // this can be done in constructor as well
        // if this life-cyce method is removed in future.
        componentWillMount() {
            // registering the interceptors before the child components are rendered
            this.reqInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});
                return request;
            })

            this.resInterceptor =  axios.interceptors.response.use(request => request, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount () {
            // In order to prevent memory leaks
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                            {this.state.error ? this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;