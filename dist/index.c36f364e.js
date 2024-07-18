const heading = "Hello World";
const root = document.getElementById("root");
root.append(heading);
const reactHeading = React.createElement("h1", {
    color: "blue"
}, "hello from react");
const appRoot = ReactDOM.createRoot(root);
appRoot.render(reactHeading);

//# sourceMappingURL=index.c36f364e.js.map
