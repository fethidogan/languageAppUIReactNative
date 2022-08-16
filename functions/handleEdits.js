export const handleSave = (dispatchFunc, dispatched, dispatch) => {
    dispatch(dispatchFunc(dispatched))
}

