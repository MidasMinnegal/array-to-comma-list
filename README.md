# Array to comma list
Very simple, yet very effective. Transform your arrays into easy to read, human friendly lists with this lightweight package.

## Installation
```
$ npm i --save array-to-comma-list
```

## How to use
```js
const myList = ['One', 'two', 'three']

const myHeathenCommaList = heathenCommaList(myList)
console.log(myHeathenCommaList)
// Output: "One, two and three"

const myOxfordCommaList = oxfordCommaList(myList)
console.log(myOxfordCommaList)
// Output: "One, two, and three"

// Multilangual support:
const myDutchList = ['Een', 'twee', 'drie']
const myDutchHeathenCommaList = heathenCommaList(myList, 'en')
console.log(myDutchHeathenCommaList)
// Output: "Een, twee en drie"
```
## Params
```
myHeathenCommaList(array, conjunction)
oxfordCommaList(array, conjunction)
```
| Param       | Description                                    | Is required | Type   | Default value |
|:------------|:-----------------------------------------------|:------------|:-------|:--------------|
| array       | The array that you want to convert             | true        | Array  | undefined     |
| conjunction | The word that is injected before the last item | false       | String | 'and'         |