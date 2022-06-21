// From: http://davidwalsh.name/css-animation-callback
function whichTransitionEvent() {
  let t,
    el = document.createElement('fakeelement'),
    transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd',
    };

  for (t in transitions) {
    if (el.style[t] !== undefined) {
      return transitions[t];
    }
  }
}

function whichAnimationEvent() {
  let t,
    el = document.createElement('fakeelement'),
    animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd',
    };

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
}

const getElem = (id) => document.getElementById(id);

const addEventTo = (elemId, ev, fn) =>
  (typeof elemId === 'string' ? getElem(elemId) : elemId).addEventListener(
    ev,
    fn
  );
const removeEventFrom = (elemId, ev, fn) =>
  (typeof elemId === 'string' ? getElem(elemId) : elemId).removeEventListener(
    ev,
    fn
  );

const onAnimationEnd = (elem, fn) => {
  const eventName = whichAnimationEvent();
  eventName && addEventTo(elem, eventName, fn);
};

const offAnimationEnd = (elem, fn) => {
  const eventName = whichAnimationEvent();
  eventName && removeEventFrom(elem, eventName, fn);
};

const onTransitionEnd = (elem, fn) => {
  const eventName = whichTransitionEvent();
  eventName && addEventTo(elem, eventName, fn);
};

const offTransitionEnd = (elem, fn) => {
  const eventName = whichTransitionEvent();
  eventName && removeEventFrom(elem, eventName, fn);
};

const onDomReady = (fn) => addEventTo(document, 'DOMContentLoaded', fn);
