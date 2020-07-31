import { call, takeLatest, put } from 'redux-saga/effects'

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json()
    return {
        data: data,
        status: response.status
    }
}


export function* get_user_details() {
    try {
        const responseData = yield call(fetchData, 'https://full-throttle-95166.firebaseio.com/folder.json');
        console.log(responseData.data.members);
        yield put({ type: 'PUT_USER_DETAILS', payload: responseData.data.members })
    }
    catch (e) {
        console.log(e)
    }
}
function* rootSaga() {
    yield takeLatest('GET_USER_DETAILS', get_user_details)
}

export default rootSaga