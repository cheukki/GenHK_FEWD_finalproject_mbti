export const scoreArr = (state, action) => {
  const { currentQ, E, I, S, N, T, F, J, P } = state;
  switch (action.type) {
      case "addE":
          return { ...state, E: [...E, currentQ] };
      case "addI":
          return { ...state, I: [...I, currentQ] };
      case "addS":
          return { ...state, S: [...S, currentQ] };
      case "addN":
          return { ...state, N: [...N, currentQ] };
      case "addT":
          return { ...state, T: [...T, currentQ] };
      case "addF":
          return { ...state, F: [...F, currentQ] };
      case "addJ":
          return { ...state, J: [...J, currentQ] };
      case "addP":
          return { ...state, P: [...P, currentQ] };
      case "removeCheckedE":
          return {...state, E: E.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedI":
          return {...state, I: I.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedS":
          return {...state, S: S.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedN":
          return {...state, N: N.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedT":
          return {...state, T: T.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedF":
          return {...state, F: F.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedJ":
          return {...state, J: J.filter(Qnum => Qnum !== currentQ)};
      case "removeCheckedP":
          return {...state, P: P.filter(Qnum => Qnum !== currentQ)};
      case "next":
          return { ...state, currentQ: currentQ+1 };
      case "back":
          return { ...state, currentQ: currentQ-1 };
      default: return;
      }
  };  
  