import React, { ChangeEvent, ReactNode, createRef } from 'react';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { BiArrowBack, BiSearch } from 'react-icons/bi';
import {} from 'react-transition-group';

import ClickAwayListener from 'react-click-away-listener';
import { Transition1 } from '../transition';
import Image from 'next/image';

const smSize = 640;
export interface MainSearchInputProps {
  placeHolder: string;
  openFilterScreen: () => void;
  closeFilterScreen: () => void;
  // value: string;
  // setValue: (value: string) => void;
}
interface IState {
  openSearchBox: boolean;
  search: string;
}
class MainSearchInput extends React.Component<MainSearchInputProps> {
  private readonly inputId = 'qw24ffd';
  private readonly searchBoxId = 'qw23ffd';
  public readonly state: IState = {
    openSearchBox: false,
    search: '',
  };

  componentDidUpdate(
    prevProps: Readonly<MainSearchInputProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    if (this.state.openSearchBox) {
      document.getElementById(this.inputId)?.focus();
    } else {
    }
  }
  componentDidMount(): void {}

  private openSearchBox = () => {
    this.props.openFilterScreen();
    document.body.style.overflow = 'hidden';
    this.setState({ ...this.state, openSearchBox: true });
  };
  private closeSearchBox = () => {
    document.body.style.overflow = 'auto';
    this.props.closeFilterScreen();
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
          <main className="relative w-full md:max-w-[600px] h-[44px]  max-h-[44px] ">
            {/* <placeHoder> */}
            <div
              className="w-full h-full z-50 p-2 flex items-center  gap-x-2 bg-gray-200 rounded-lg"
              onClick={this.openSearchBox}
            >
              <BiSearch
                color="#6b7280 "
                className="w-[18px] h-[18px] sm:w-[23px] sm:h-[23px]"
                size={18}
              />

              <p className="text-[12px] ">{search || placeHolder}</p>
              <p className="text-[12px] ms-1 md:hidden">{'در'}</p>
              <Image
                className="md:hidden"
                width={90}
                height={24}
                alt="icon"
                src="/asset/img/persian-logo.svg"
              />
            </div>
            {/* <input> */}

            <div
              onClick={this.closeSearchBox}
              className={`${
                openSearchBox
                  ? 'transition-opacity duration-300 ease-out opacity-100 visible '
                  : 'transition-opacity duration-300 ease-out opacity-0 invisible '
              } md:absolute sm:fixed z-20 top-0 left-0 md:w-full sm:w-screen sm:h-screen  px-2 py-1 md:h-52 border border-solid border-gray-100 md:rounded-[8px] sm:rounded-none drop-shadow-md bg-white `}
            >
              <div className="p-2 w-full flex gap-y-2 border-b border-b-sky-600">
                <BiSearch className="md:inline sm:hidden" size={18} />
                <BiArrowBack
                  onClick={this.closeSearchBox}
                  className="rotate-180  md:hidden sm:inline hidden"
                  size={24}
                />
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
      </>
    );
  }
}

export default MainSearchInput;
