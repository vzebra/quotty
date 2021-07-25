import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
  Reducer,
  Store
} from 'redux'

import createSagaMiddleware, { Saga, SagaMiddleware } from 'redux-saga'

import { composeWithDevTools } from 'redux-devtools-extension'

import { reducer as globalReducer } from './reducer'

class StoreConfig {
  #reducerRegistry: Record<string, Reducer> = {
    global: globalReducer
  }
  #store: Store
  #sagaMiddleware: SagaMiddleware = createSagaMiddleware()

  constructor() {
    this.buildStore()
  }

  buildStore = () => {
    this.#store = createStore(
      combineReducers(this.#reducerRegistry),
      compose(applyMiddleware(this.#sagaMiddleware), composeWithDevTools())
    )
  }

  getStore = () => this.#store

  registerReducer = (reducer: Reducer, reducerKey: string) => {
    this.#reducerRegistry[reducerKey] = reducer
    this.#store.replaceReducer(combineReducers(this.#reducerRegistry))
  }

  registerSaga = (saga: Saga) => {
    this.#sagaMiddleware.run(saga, this.#store)
  }
}

export default new StoreConfig()
