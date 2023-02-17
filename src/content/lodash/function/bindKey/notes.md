Creates a function that invokes the method at <code>object[key]</code> with <code>partials</code> prepended to the arguments it receives.<br><br>This method differs from <a href="#bind"><code>_.bind</code></a> by allowing bound functions to reference methods that may be redefined or don't yet exist. See <a href="http://peter.michaux.ca/articles/lazy-function-definition-pattern">Peter Michaux's article</a> for more details.<br><br>The <code>_.bindKey.placeholder</code> value, which defaults to <code>\_</code> in monolithic builds, may be used as a placeholder for partially applied arguments.

Resources: [Spread](https://mdn.io/spread_operator)