import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
// import { useImmer, useImmerReducer, ImmerReducer,} from 'use-immer';
import {
  Actions,
  ImmerReducer,
  createActionCreators,
  createReducerFunction,
} from 'immer-reducer';
import { useImmerReducer } from 'use-immer';
import { AdminSideBar } from '../lib/components';
import { isPathInArray } from '../lib/services';
import { usePathname } from 'next/navigation';
const AdminLocalContext = createContext({});

interface State {
  shouldRenderSharedSideBar: boolean;
}

const initalState: State = {
  shouldRenderSharedSideBar: false,
};
class AdminLocalContextReduer extends ImmerReducer<State> {
  openSideBar() {
    this.draftState.shouldRenderSharedSideBar = true;
  }
  closeSideBar() {
    this.draftState.shouldRenderSharedSideBar = false;
  }
}

const reducerFunction = createReducerFunction(
  AdminLocalContextReduer,
  initalState
);

function ContextProvider({ children }: { children: ReactNode }) {
  const PATHS = ['login'];
  const [state, dispatch] = useImmerReducer(reducerFunction, initalState);
  const pathname = usePathname();

  useEffect(() => {
    const result = isPathInArray(pathname, PATHS);
    if (result) {
      dispatch(AdminLocalContextAction.closeSideBar());
    }
  });

  return (
    <AdminLocalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <main className="flex w-full h-screen">
        {state.shouldRenderSharedSideBar && <AdminSideBar />}
        <div className="pt-4 px-2 w-full">{children}</div>
      </main>
    </AdminLocalContext.Provider>
  );
}

export const AdminLocalContextAction = createActionCreators(
  AdminLocalContextReduer
);

type AdminLocalContextReturnType = {
  dispatch: (action: Actions<typeof AdminLocalContextReduer>) => void;
  state: State;
};
export const useAdminLocalContext = (): AdminLocalContextReturnType =>
  useContext(AdminLocalContext) as AdminLocalContextReturnType;
export default ContextProvider;
