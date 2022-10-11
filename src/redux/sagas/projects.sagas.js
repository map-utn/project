import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  onGetAnsoff,
  onGetMckinsey,
  onGetOKR,
  onGetPestel,
  onGetPorter,
} from 'redux/actions/projects.actions';

import * as appConstants from 'redux/contansts/app.constants';
import * as constants from 'redux/contansts/projects.constants';
import {
  getAll,
  getAnsoffs,
  getFodas,
  getMckinsey,
  getOkrs,
  getOne,
  getPestels,
  getPorters,
  getBalancedScorecard,
  save,
} from 'services/projects.services';

export function* projectsSaveOne(action) {
  try {
    const { formData } = action;
    const { data } = yield call(save, formData);
    yield put({
      type: constants.PROJECTS_ON_CREATE_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_CREATE_FAILED, error });
  }
}

export function* projectsOnGetAll() {
  try {
    const { data } = yield call(getAll);
    yield put({
      type: constants.PROJECTS_ON_GET_ALL_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_ALL_FAILED, error });
  }
}

export function* projectsOnGetOne(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getOne, id);
      yield put({
        type: constants.PROJECTS_ON_GET_ONE_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_ONE_FAILED, error });
  }
}

export function* projectsOnGetFodas(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getFodas, id);
      yield put({
        type: constants.PROJECTS_ON_GET_FODA_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_FODA_FAILED, error });
  }
}

export function* projectsOnGetPestels(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getPestels, id);
      yield put({
        type: constants.PROJECTS_ON_GET_PESTEL_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_PESTEL_FAILED, error });
  }
}

export function* projectsOnGetPorters(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getPorters, id);
      yield put({
        type: constants.PROJECTS_ON_GET_PORTER_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_PORTER_FAILED, error });
  }
}

export function* projectsOnGetAnsoffs(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getAnsoffs, id);
      yield put({
        type: constants.PROJECTS_ON_GET_ANSOFF_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_ANSOFF_FAILED, error });
  }
}

export function* projectsOnGetOkrs(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getOkrs, id);
      yield put({
        type: constants.PROJECTS_ON_GET_OKR_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_OKR_FAILED, error });
  }
}

export function* projectsOnGetMckinseys(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getMckinsey, id);
      yield put({
        type: constants.PROJECTS_ON_GET_MCKINSEY_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_MCKINSEY_FAILED, error });
  }
}

export function* projectsOnGetBalancedScorecard(action) {
  try {
    const { id } = action;
    if (id) {
      const { data } = yield call(getBalancedScorecard, id);
      yield put({
        type: constants.PROJECTS_ON_GET_BALANCED_SCORECARD_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({
      type: constants.PROJECTS_ON_GET_BALANCED_SCORECARD_FAILED,
      error,
    });
  }
}

export function* watchProjects() {
  yield all([
    takeLatest(constants.PROJECTS_ON_GET_ONE_REQUESTED, projectsOnGetOne),
    takeLatest(constants.PROJECTS_ON_GET_ALL_REQUESTED, projectsOnGetAll),
    takeLatest(constants.PROJECTS_ON_CREATE_REQUESTED, projectsSaveOne),
    takeLatest(constants.PROJECTS_ON_GET_FODA_REQUESTED, projectsOnGetFodas),
    takeLatest(
      constants.PROJECTS_ON_GET_PORTER_REQUESTED,
      projectsOnGetPorters
    ),
    takeLatest(
      constants.PROJECTS_ON_GET_PESTEL_REQUESTED,
      projectsOnGetPestels
    ),
    takeLatest(
      constants.PROJECTS_ON_GET_ANSOFF_REQUESTED,
      projectsOnGetAnsoffs
    ),
    takeLatest(constants.PROJECTS_ON_GET_OKR_REQUESTED, projectsOnGetOkrs),
    takeLatest(
      constants.PROJECTS_ON_GET_MCKINSEY_REQUESTED,
      projectsOnGetMckinseys
    ),
    takeLatest(
      constants.PROJECTS_ON_GET_BALANCED_SCORECARD_REQUESTED,
      projectsOnGetBalancedScorecard
    ),
  ]);
}
