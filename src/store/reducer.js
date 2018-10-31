import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import newsDetail from '../views/news-detail/reducer'
import main from '../views/main/reducer'
import newsradarDetail from '../views/newsradar-detail/reducer'
import newsradarHelp from '../views/newsradar-help/reducer'

export default combineReducers({
  routing: routerReducer,
  newsDetail,
  main,
  newsradarDetail,
  newsradarHelp,
})
