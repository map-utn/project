import * as constants from 'redux/contansts/foda.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: [],
  options: {
    importancia: [],
    intensidad: [],
    tendencia: [],
    urgencia: [],
  },
  seeds: [],
};

const fodaReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_FODA_REQUESTED:
    case constants.FODA_DELETE_FACTOR_REQUESTED:
    case constants.GET_FODA_REQUESTED:
    case constants.FODA_INSERT_FACTOR_REQUESTED:
    case constants.FODA_UPDATE_FACTOR_REQUESTED:
    case constants.FODA_GET_OPTIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_FODA_SUCCEEDED:
    case constants.FODA_DELETE_FACTOR_SUCCEEDED:
    case constants.GET_FODA_SUCCEEDED:
    case constants.FODA_INSERT_FACTOR_SUCCEEDED:
    case constants.FODA_UPDATE_FACTOR_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.FODA_GET_OPTIONS_SUCCEEDED:
      return {
        ...state,
        options: { ...state.options, ...data.options },
      };
    case constants.FODA_GET_SEEDS_SUCCEEDED:
      return {
        ...state,
        seeds: { ...state.seeds, ...data.seeds },
      };
    case constants.CREATE_FODA_FAILED:
    case constants.FODA_DELETE_FACTOR_FAILED:
    case constants.GET_FODA_FAILED:
    case constants.FODA_INSERT_FACTOR_FAILED:
    case constants.FODA_UPDATE_FACTOR_FAILED:
    case constants.FODA_GET_OPTIONS_FAILED:
      return {
        ...state,
        loading: false,
      };
    case projectConstants.PROJECTS_ON_GET_ONE_REQUESTED:
      return defaultState;
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default fodaReducer;
