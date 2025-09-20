export default class testClass {
  component(): HTMLElement {
    const element = document.createElement('div');

    element.innerHTML = ["Hello", "webpack"].join(" ");

    return element;
  }
}

document.body.appendChild(new testClass().component());