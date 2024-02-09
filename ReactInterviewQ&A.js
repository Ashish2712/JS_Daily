/**
Q-1 What is reactzjs?
Ans: React.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces (UIs) or front-end components for web applications. It was developed by Facebook and later open-sourced. React is maintained by Facebook along with a community of individual developers and companies.
React is popular for several reasons:
Component-Based: React follows a component-based architecture where UIs are composed of independent and reusable components. These components encapsulate the structure, behavior, and styling of a particular part of the user interface.
Virtual DOM: React uses a virtual DOM (Document Object Model) for efficient updating of the UI. Instead of updating the actual DOM directly, React creates a virtual representation of it in memory and updates only the parts of the actual DOM that have changed. This approach results in better performance compared to directly manipulating the DOM.
JSX: React uses JSX (JavaScript XML) syntax, which allows developers to write HTML-like code within JavaScript. JSX makes it easier to create and manipulate React elements, and it's transpiled to regular JavaScript before being rendered in the browser.
Unidirectional Data Flow: React follows a unidirectional data flow, where data flows in one direction from parent components to child components. This helps in managing the state of the application and makes it easier to understand how data changes over time.
Declarative: React promotes a declarative programming style, where developers describe how the UI should look based on the application state, rather than imperatively manipulating the DOM to achieve a desired state.
Community and Ecosystem: React has a large and active community of developers and a vast ecosystem of libraries and tools (such as React Router for routing, Redux for state management, and React Native for mobile development) that enhance its capabilities and make development more efficient.
React is commonly used in combination with other libraries and frameworks, such as Redux for state management, React Router for routing in single-page applications, and Axios or Fetch for making HTTP requests. Additionally, React is often used with build tools like Webpack and Babel to transpile and bundle code for deployment.
**/

/**
Q-2 What is difference between virtual dom and shallow dom , dom in React js
Ans: 
DOM (Document Object Model)
The DOM is a programming interface provided by web browsers to render web pages. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree of objects; when you change the DOM, the page updates to reflect those changes.
Manipulating the DOM directly (especially on large web applications) can be slow and inefficient because changes to the DOM tree often require re-rendering of the page, or parts of it, to reflect those changes.
2. Virtual DOM
The Virtual DOM is an abstraction of the actual DOM, a lightweight copy of the DOM tree. React uses this concept for efficient updating of the web page. When a component's state changes, React first changes the Virtual DOM, then compares the updated Virtual DOM with a pre-update version, and calculates the most efficient way to make these changes on the actual DOM.
This process, known as "diffing," allows React to minimize direct manipulations of the DOM, which can be costly performance-wise. By batching changes and updating only what's necessary, React enhances the performance and responsiveness of web applications.
3. Shallow DOM
Shallow DOM typically refers to shallow rendering, a concept used in testing React components. Shallow rendering is a feature provided by testing libraries (such as Enzyme or React Testing Library) that allows components to be rendered without rendering their children. This is useful for unit testing components in isolation without worrying about the behavior of child components.
Shallow rendering tests the component as a unit, and ensures that tests are not indirectly asserting the behavior of child components. This approach makes tests more predictable and easier to understand.
**/

/**
Q-3 What is controlled and uncontrolled component in React js
Ans: 
In React, the terms "controlled" and "uncontrolled" components refer to the approach used to manage the state of form elements like <input>, <textarea>, and <select>. The distinction between controlled and uncontrolled components is an important part of React's philosophy regarding form handling.

Controlled Components
A controlled component is one where React controls the state and updates of the form element. In a controlled component, the form data is handled by the React component's state. You use the value property to set the value of the form element, and an onChange event handler to update the state based on user input.
**/

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

//In this example, the <input> element is a controlled component because its value is controlled by React.

// Uncontrolled Components
// An uncontrolled component works more like traditional HTML form elements. The state of the form element is handled by the DOM itself, not by the React component. You can access the value of an uncontrolled component using a ref to directly interact with the DOM element, rather than saving its state in the component.


class UncontrolledComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
//In this example, the <input> element is an uncontrolled component because its value is not controlled by React.

/**
Key Differences
State Management: Controlled components have their state managed by React (using component state), while uncontrolled components manage their own state in the DOM.
Data Handling: In controlled components, you need to handle form data via state and provide an onChange handler to update this state. For uncontrolled components, 
you typically access their data through refs when you need it (e.g., on form submission).
Use Cases: Controlled components are beneficial when you need to implement complex interactions or instant validation of user input. 
Uncontrolled components can be easier to integrate with non-React code and for simpler forms where direct access to the DOM is more straightforward.
React generally recommends using controlled components to implement forms, as it allows for more direct control over the form's state and behavior, 
leading to more predictable and organized code. However, uncontrolled components can be useful in certain situations where you want to avoid the 
overhead of React's state management for every form field.
**/

/**Q:4 What is hooks in React js?
Ans: Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. 
Hooks let you "hook into" React state and lifecycle features from function components. The most commonly used hooks are useState for 
adding state to functional components, useEffect for performing side effects (such as data fetching, subscriptions, or manually changing the DOM), 
  and useContext for accessing React context without a consumer. Hooks offer a more direct API to React concepts you already know, make your components 
  more reusable, and greatly simplify your code. They are now the standard for writing React components.
**/

/** Q:5 What is jsx, babel, webpack?
Ans: JSX, Babel, and Webpack are key technologies used in modern React development:

JSX (JavaScript XML):
JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows developers to write UI components in a syntax that 
resembles HTML, but it ultimately gets transformed into regular JavaScript by a preprocessor like Babel before being rendered in the browser. 
JSX makes it easier to describe the structure of UI components in React.
Babel:
Babel is a JavaScript compiler that enables developers to use the latest ECMAScript features and other syntax extensions, like JSX, 
that might not be supported in all browsers. Babel transpiles modern JavaScript code into a backward-compatible version, 
ensuring broader compatibility across different browsers. It's a common tool in React projects to transform JSX into plain JavaScript that browsers can understand.
Webpack:
Webpack is a module bundler that simplifies the process of managing and bundling various assets, including JavaScript files, stylesheets, images, 
and more. In a React application, Webpack is often used to bundle together all the necessary files into a smaller number of optimized files for deployment. 
It also helps with tasks like code splitting, hot module replacement, and optimizing assets for production. Webpack is highly configurable and widely used 
in the React ecosystem to streamline the development and deployment workflow.

