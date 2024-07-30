import { RootState } from "../../services/store";

type Segments = keyof RootState;

export type UseSelectMethod<S extends keyof RootState> = (
  asHook: boolean
) => RootState[S];

function InjectUseSelect(segment: Segments) {
  return function (target: any) {
    target.prototype.useSelect = function (asHook: boolean) {
      return asHook
        ? this.getUseSelector()((store: RootState) => store[segment])
        : this.getStore()[segment];
    };
  };
}

export default InjectUseSelect;
