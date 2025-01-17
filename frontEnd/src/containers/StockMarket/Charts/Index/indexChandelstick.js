import React from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import * as myConstants from '../../../Utils/Constants/Constants';
import styles from '../../../../assets/css/ReactLoading/ReactLoading.css';
import ChandleStick from '../ChandleStick';
import ErrorMessageModal from '../../../Utils/ErrorMessageModal/ErrorMessageModal';

import { timeParse } from "d3-time-format";

const parseDate = timeParse("%Y-%m-%d");

class ChandleStickChart extends React.Component {
    state = {
        data: [{date: parseDate("2019-01-04"),}, {date: parseDate("2019-01-04"),}],
        isLoading: false,
        error: null,
        openErrorModal: false
    }

    handleCloseErrorModal = () => {
        this.setState({openErrorModal:false});
    }

  
    componentDidMount() {
        this.setState({ isLoading: true});
        axios.get(`${myConstants.SEVER_URL}/stock/getFile?id=` + this.props.companyId)
        .then(response => {
            let data = response.data.result.sort(function(a, b){return parseDate(a.date) - parseDate(b.date)}).map(value => {
                return {
                    date: parseDate(value.date),
                    open: value.open,
                    high: value.high,
                    low: value.low,
                    close: value.close,
                    volume: value.volume
                }     
            })
            this.setState(prevState => {
                return {
                    data: data,
                    isLoading: false
                }
            })
        })
        .catch(error => {
            this.setState({
                error:error.message,
                openErrorModal:false
            })
        })
    }

   

    componentWillReceiveProps() {    
            this.setState({ isLoading: true});
            axios.get(`${myConstants.SEVER_URL}/stock/getFile?id=` + this.props.companyId)
            .then(response => {
            let data = response.data.result.sort(function(a, b){return parseDate(a.date) - parseDate(b.date)}).map(value => {
                return {
                    date: parseDate(value.date),
                    open: value.open,
                    high: value.high,
                    low: value.low,
                    close: value.close,
                    volume: value.volume
                }     
            })
            this.setState(prevState => {
                return {
                    data: data,
                    isLoading: false
                }
            })
            })
            .catch(error => {
                this.setState({
                    error:error.message,
                    openErrorModal:true
                })
            })
    }

    render() {
        const { isLoading } = this.state;
        return (
               <div>
                    {
                        isLoading === false && <ChandleStick data={this.state.data}/>
                    }
                    {
                        isLoading === true && 
                        <div className={styles.react_loading_container}>
                            <ReactLoading type={'spin'} color={'#006AFF'} height={'5%'} width={'5%'} />
                        </div>
                    }
                    {this.state.openErrorModal &&
                        <ErrorMessageModal 
                            closeModal={this.handleCloseErrorModal}
                            error={this.state.error}
                        />
                    } 
               </div>
        )
    }
}

export default ChandleStickChart;






