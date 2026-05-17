import { create } from "zustand"

import type { Job } from "~/domain/models"
import mockJobsData from "~/data/mock-jobs.json"

const MOCK_JOBS: Job[] = mockJobsData.map((j) => ({
  ...j,
  createdAt: new Date(j.createdAt),
})) as Job[]

interface JobsState {
  jobs: Job[]
  currentIndex: number
  isLoading: boolean
  error: string | null
}

interface JobsActions {
  setJobs: (jobs: Job[]) => void
  appendJobs: (jobs: Job[]) => void
  advance: () => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState: JobsState = {
  jobs: MOCK_JOBS,
  currentIndex: 0,
  isLoading: false,
  error: null,
}

export const useJobsStore = create<JobsState & JobsActions>()((set, get) => ({
  ...initialState,

  setJobs: (jobs) => set({ jobs, currentIndex: 0 }),

  appendJobs: (jobs) => set((state) => ({ jobs: [...state.jobs, ...jobs] })),

  advance: () =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, state.jobs.length),
    })),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),

  reset: () => set(initialState),
}))

// Selectors
export const selectCurrentJob = (state: JobsState): Job | undefined =>
  state.jobs[state.currentIndex]

export const selectHasMoreJobs = (state: JobsState): boolean =>
  state.currentIndex < state.jobs.length
