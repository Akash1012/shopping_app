import { createSelector } from 'reselect'

const selectDirectory = (state) => state.directory // Input Selector


export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => {
        return directory.sections
    }
)
