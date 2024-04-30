import { Dispatch } from 'redux';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { addPluse, removePluse } from '../features/loading';

export default class LoadingService {
  private _useSelector = () => useSelector;
  constructor(private dispatch: Dispatch) {}

  addPluse() {
    this.dispatch(addPluse());
  }
  getPluse() {
    return this._useSelector()(
      (state: RootState) => state.pluse_loading.loading
    );
  }
  removePluse() {
    this.dispatch(removePluse());
  }
}
