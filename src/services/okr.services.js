import { get, post, put, remove } from 'services/api';

export const createTool = (formData) => post('okr-projects', formData);

export const getOneTool = (id) => get(`okr-projects/${id}`);

export const deleteOkr = (id) => remove(`okr-projects/${id}`);

export const createOkr = (id, formData) =>
  post(`okr-projects/${id}/okrs`, formData);

export const getOneOkr = (id, okrId) => get(`okr-projects/${id}/okrs/${okrId}`);

export const deleteOkrItem = (id, okrId) =>
  remove(`okr-projects/${id}/okrs/${okrId}`);

export const addKeyResult = (id, okrId, formData) =>
  post(`okr-projects/${id}/okrs/${okrId}`, formData);

export const editKeyResult = (id, okrId, keyResultId, formData) =>
  put(`okr-projects/${id}/okrs/${okrId}/key-results/${keyResultId}`, formData);

export const editKeyStatus = (id, okrId, keyResultId, formData) =>
  put(
    `okr-projects/${id}/okrs/${okrId}/key-results/${keyResultId}/key-status/${formData.id}`,
    formData
  );

export const deleteOkrKeyResultItem = (id, okrId, keyResultId) =>
  remove(`okr-projects/${id}/okrs/${okrId}/key-results/${keyResultId}`);
