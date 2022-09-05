import React from 'react';
import styled from 'styled-components';

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  animation: fade 0.4s ease-in forwards;
  background: #333;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: none;
    background: #6fd5fd;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in infinite, blink 0.7s infinite alternate;
    box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 20px #22bffd, 0 0 30px #22bffd, 0 0 40px #22bffd, 0 0 50px #22bffd;
  }

  .one {
    animation-delay: 0.3s;
  }
  .two {
    animation-delay: 0.45s;
  }
  .three {
    animation-delay: 0.55s;
  }
  .four {
    animation-delay: 0.65s;
  }
  .five {
    animation-delay: 0.75s;
  }

  @keyframes blink {
    100% {
      box-shadow: 0 0 3px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #22bffd, 0 0 70px #22bffd, 0 0 80px #22bffd;
    }
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const LoadingScreen = () => {
  return (
    <Screen>
      <Balls>
        <div className="ball one"></div>
        <div className="ball two"></div>
        <div className="ball three"></div>
        <div className="ball four"></div>
        <div className="ball five"></div>
      </Balls>
    </Screen>
  );
};

export default LoadingScreen;
