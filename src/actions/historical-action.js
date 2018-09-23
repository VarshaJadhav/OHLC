import axios from 'axios';

import {
	HISTORICAL_REQUEST,
	HISTORICAL_SUCCESS,
	HISTORICAL_FAILURE
} from './action-types';
import { 
  REQ_TIMEOUT,
	ROOT_URL,
  NETWORK_FAILURE_MSG 
} from '../constants';

import { timeout } from '../utils/utils';

function historicalRequest() {
  return {
    type: HISTORICAL_REQUEST,
    isFetchingHistoricalData: true 
  }
}

function historicalSuccess(historicalData) {
  return {
    type: HISTORICAL_SUCCESS,
    isFetchingHistoricalData: false,
    historicalData
  }
}

function historicalFailure() {
  return {
    type: HISTORICAL_FAILURE,
    isFetchingHistoricalData: false 
  }
}

export function getHistoricalData() {
	return dispatch => {

		/* before making api call */
		dispatch(historicalRequest());

		return timeout(REQ_TIMEOUT, axios.get(`${ROOT_URL}/historical`)).then(response => {
				if(response.status === 200) {

					/* after successfully completion of API Call */
					dispatch(historicalSuccess(response.data));
				}
				return response;
			}).catch(err => {

				// if any server side error message
      	if(err.response && err.response.data ) {
      		dispatch(historicalFailure(err.response.data));
      	} else {
      		dispatch(historicalFailure(NETWORK_FAILURE_MSG));
      	}
        return err;
			});
	}
}