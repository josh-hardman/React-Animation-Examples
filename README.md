This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## CSS Animations with styled-components

* Best used for simple event driven animation. Ie. expanding a menu after clicking on a button
* css properties that are going to be animated are controlled in component state.
* Events update state.
* The animated styled component has a transition or animation set for desired properties
* Styled component takes props for mutable properties controlled by State

## Animations with gsap and ReactTransitionGroup

* Best for animations dependent on the lifecycle
* ReactTransitionGroup exposes a low level api that introduces animation specific lifecycle hooks
  * componentWillEnter(callback)
  * componentDidEnter()
  * componentWillLeave(callback)
  * componentDidLeave()
* Gsap is a powerful 3rd party library that plays nicely with ReactTransitionGroup (It is big though, and is best to pull in through a CDN to reduce your build size)
* Follow the example in Gsap.js to understand how Gsap works with ReactTransitionGroup
