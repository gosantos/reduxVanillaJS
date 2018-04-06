export const changeStatus = userName => ({
    type: 'CHANGE_STATUS',
    payload: `${userName} is typing`
});