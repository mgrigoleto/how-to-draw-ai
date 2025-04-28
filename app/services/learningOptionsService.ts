import api from './api';
import { LearningOption } from '../types'

export async function fetchLearningOptions(): Promise<LearningOption[]> {
  const response = await api.get<LearningOption[]>('/lessons');
  return response.data;
}
