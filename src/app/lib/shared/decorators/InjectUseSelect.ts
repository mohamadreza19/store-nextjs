import { RootState } from "../../services/store";

type Segments = keyof RootState;
function InjectUseSelect(segment: Segments) {
  return function (target: any) {
    target.prototype.useSelect = function (asHook: boolean) {
      asHook
        ? this.getUseSelector()((store: RootState) => store[segment])
        : this.getStore()[segment];
    };
  };
}

export default InjectUseSelect;
