import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView8657Saga from '../features/CalendarView8657/redux/sagas';
import EmailAuth8656Saga from '../features/EmailAuth8656/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView8657Saga,
EmailAuth8656Saga,
    
  ]);
}