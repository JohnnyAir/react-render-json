# react-render-json
Render component from json description.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

```jsx
let description = {
  "component": "Grid",
  "props": null,
  "children": {
    "component": "Header",
    "props": {
      "fontSize": "20px"
    },
    "children": [
      {
        "component": "Text",
        "props": {
          "key": "2"
        },
        "children": {
          "component": "Header",
          "props": {
            "fontSize": "20px"
          },
          "children": "Hi John"
        }
      },
      {
        "component": "Text",
        "props": {
          "key": "1"
        },
        "children": "Hello World"
      }
    ]
  }
}

<JsonRenderer json={description} />;

//renders
React.createElement(
  Grid,
  null,
  React.createElement(
    Header,
    {
      fontSize: "20px",
    },
    [
      React.createElement(
        Text,
        null,
        React.createElement(
            Header,
            {
              fontSize: "20px",
            },
            "Hi John"
         )
       ),
      React.createElement(Text, null, "Hello World")
    ]
  )
);
```
