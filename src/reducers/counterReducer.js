export default function counterReducer (counter, action) {
    console.log(action.type);
    switch (action.type) {
      case "Increment":
        return counter + 1;
      case "Decrement":
        return counter - 1;
      case "Add":
        return counter + action.inputHandler;
      case "Subtract":
        return counter - action.inputHandler;
      case "Divide":
        return counter / action.inputHandler;
      case "Multiply":
        return counter * action.inputHandler;
      case "Power":
        return counter ** action.inputHandler;
      case "Modulus":
        return counter % action.inputHandler;
      case "RESET":
        return 0;
      case "SQ Root":
        return Math.sqrt(counter);
      case "Ultimate Answer":
        return 42;
      default:
        alert("not a math function");
        break;
    }
  };