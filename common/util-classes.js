// Set up some utility methods
Element.prototype.setClassAttribute = function (inClass) {
  this.className = inClass;
};

Element.prototype.getClassAttribute = function () {
  return this.className || '';
};

Element.prototype.hasClass = function (inClass) {
  return this.classList.contains(inClass);
};

// Element.prototype.addClass = Element.prototype.classList.add;
// Element.prototype.addClass = (inClass) => {this.classList.add(inClass);};

Element.prototype.addClass = function (inClass) {
  this.classList.add.apply(
    this.classList,
    inClass instanceof Array ? inClass : [inClass]
  );
};

Element.prototype.removeClass = function (inClass) {
  this.classList.remove.apply(
    this.classList,
    inClass instanceof Array ? inClass : [inClass]
  );
};

Element.prototype.addRemoveClass = function (inClass, inTrueToAdd) {
  this.classList[inTrueToAdd ? 'add' : 'remove'](inClass);
};

Element.prototype.setStyle = function (variable, value) {
  this.style.setProperty(variable, value);
};

Element.prototype.applyStyles = function (inStyles) {
  for (let prop in inStyles) {
    this.setStyle(prop, inStyles[prop]);
  }
};

Element.prototype.toggleClass = function (inClass) {
  this.classList.toggle(inClass);
};

Element.prototype.replaceClass = function (oldClass, newClass) {
  // console.log('this:', this, this.classList.replace);
  // if (this.classList.replace) // Added in Chrome 61
  // 	{this.classList.replace(oldClass, newClass);}
  // else {
  this.classList.remove(oldClass);
  this.classList.add(newClass);
  // }
};
