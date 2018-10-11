function EventObserver( ) {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`)
  },
  unsubscribe: function(fn){
    //Filter out from the list whatever mathches the callback function. if there is no match, the callback gets to stay on the list. the filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed form ${fn.name}`)
  },
  fire: function() {
    this.observers.forEach(item => {
      item.call();
    });
  }
}

const click = new EventObserver();

//Event listerners
document.querySelector('.sub-ms').addEventListener
('click', function() {
  click.subscribe(getCureMillisecons);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCureMillisecons);
});

document.querySelector('.sub-s').addEventListener
('click', function() {
  click.subscribe(getCureSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
  click.unsubscribe(getCureSeconds);
});

document.querySelector('.fire').addEventListener
('click', function() {
  click.fire();
});

//Click handler
const getCureMillisecons = function() {
  console.log(`Current Millisecons: ${new Date().getMilliseconds()}`)
}

const getCureSeconds = function() {
  console.log(`Current seconds: ${new Date().getSeconds()}`)
}