import React, { ChangeEvent, ReactNode } from "react";
import { BiSearch } from "react-icons/bi";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";

import ClickAwayListener from "react-click-away-listener";
import { Transition1 } from "../transition";

interface IProps {
  placeHolder: string;
  // value: string;
  // setValue: (value: string) => void;
}
interface IState {
  openSearchBox: boolean;
  search: string;
}
class MainSearchInput extends React.Component<IProps> {
  private readonly inputId = "qw24ffd";
  private readonly searchBoxId = "qw23ffd";
  public readonly state: IState = {
    openSearchBox: false,
    search: "",
  };

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (this.state.openSearchBox) {
      document.getElementById(this.inputId)?.focus();
    } else {
    }
  }

  private openSearchBox = () => {
    this.setState({ ...this.state, openSearchBox: true });
  };
  private closeSearchBox = () => {
    this.setState({ ...this.state, openSearchBox: false });
  };
  private handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, search: e.target.value });
  };

  render(): ReactNode {
    const { placeHolder } = this.props;
    const { openSearchBox, search } = this.state;

    return (
      <>
        <ClickAwayListener onClickAway={this.closeSearchBox}>
          <main className="relative w-full md:max-w-[600px] md:h-[44px] md:max-h-[44px] ">
            {/* <placeHoder> */}
            <div
              className="w-full h-full z-50 p-2 flex items-center  gap-x-2 bg-gray-200 rounded-lg"
              onClick={this.openSearchBox}
            >
              <BiSearch color="#6b7280" size={18} />

              <p className="text-[12px]">{search || placeHolder}</p>
            </div>
            {/* <input> */}

            <div
              onClick={this.openSearchBox}
              className={`${
                openSearchBox
                  ? "transition-opacity duration-300 ease-out opacity-100 visible "
                  : "transition-opacity duration-300 ease-out opacity-0 invisible "
              } absolute z-20 top-0 left-0 w-full px-2 py-1 md:h-52 border border-solid border-gray-100 rounded-[8px] drop-shadow-md bg-white `}
            >
              <div className="p-2 w-full flex gap-y-2 border-b border-b-sky-600">
                <BiSearch size={18} />
                <input
                  id={this.inputId}
                  onChange={this.handleChangeSearch}
                  placeholder={placeHolder}
                  className="w-full text-[12px] px-4 pb-1 focus:outline-none"
                />
              </div>
            </div>

            {/* <cover> */}
          </main>
        </ClickAwayListener>
        {openSearchBox && (
          <div className=" h-screen  w-screen bg-[#0c0c0c] bg-opacity-30 fixed top-[115px] left-1/2 transform -translate-x-1/2  z-10 flex items-center justify-center"></div>
        )}
      </>
    );
  }
}

export default MainSearchInput;
