import React, { createContext, Component, useState, useEffect } from "react";

export const WindowContext = createContext();

class WindowContextProvider extends Component {
  state = {
    height: 0,
    width: 1080
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.setState({ height: window.innerHeight, width: window.innerWidth });
  }

  render() {
    return (
      <WindowContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </WindowContext.Provider>
    );
  }

  updateWindowSize = ({ target: { innerHeight, innerWidth } }) => {
    this.setState({ height: innerHeight, width: innerWidth });
  };
}

export default WindowContextProvider;

export function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
