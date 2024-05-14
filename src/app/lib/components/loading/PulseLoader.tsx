import { PulseLoader } from "react-spinners";
import { LoadingService } from "../../services";
import { useDispatch } from "react-redux";
import { Transition1 } from "../transition";
import { useEffect } from "react";
import { TransitionGroup } from "react-transition-group";
const color = "#374151";
function Loading1() {
  const loadingService = new LoadingService();
  return (
    <TransitionGroup>
      {loadingService.getPluse() && (
        <Transition1>
          <div className=" h-screen  w-screen bg-gray-400 bg-opacity-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center">
            <section className="w-60 h-44 bg-white rounded-lg flex items-center justify-center">
              <PulseLoader color={color} />
            </section>
          </div>
        </Transition1>
      )}
    </TransitionGroup>
  );
}

export default Loading1;
