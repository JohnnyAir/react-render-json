# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# react-render-json

A render component from json description.

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
<Grid>
  <Header fontSize="20px">
    <Text>
      <Header fontSize="20px">Hi John</Header>
    </Text>
    <Text>Hello World</Text>
  </Header>
</Grid>
```
