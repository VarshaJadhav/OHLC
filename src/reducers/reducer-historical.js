import { 
  HISTORICAL_REQUEST,
	HISTORICAL_SUCCESS,
	HISTORICAL_FAILURE
} from "../actions/action-types";

const INITIAL_STATE = {
  isFetchingHistoricalData: false,
  historicalData: null 
};

export const historicalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HISTORICAL_REQUEST: {
      return {
        ...state,
        isFetchingHistoricalData: action.isFetchingHistoricalData
      };
    }
    case HISTORICAL_SUCCESS: {
      return {
        ...state,
        isFetchingHistoricalData: action.isFetchingHistoricalData,
        historicalData: action.historicalData
      };
    }
    case HISTORICAL_FAILURE: {
      return {
        ...state,
        isFetchingHistoricalData: action.isFetchingHistoricalData
      };
    }
    default:
      return state;
  }
};