# Converts <code>string</code> to <a href="https://en.wikipedia.org/wiki/Letter_case#Special_case_styles">kebab case</a>.

## Explanation of function : 

* **Section A :** `String(str ?? "")` converts `str` to string and if `str` is not defined (`null` or `undefined`) `??` sets it to `""` by default

* **Section B :** `.match(/([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g) ` returns an array of parties matching the regex

* **Section C :** `?? [""]` : If the regex does not work, we return an empty array by default (`map()` function need an array but `match()` function can return `null` value)

* **Section D :** `map((x) => x.toLowerCase())` transforms each part into lower case

* **Section E :** `join("-")` joins each part with a `-` to make a string


## Explanation of regex : `/([0-9]+|([A-Z][a-z]+)|[a-z]+|([A-Z]+)(?![a-z]))/g)`

* **Section 1 :** `[0-9]+` : Anything that contains only numbers is a part

* **Section 2 :** `([A-Z][a-z]+)` Anything that contains a single capital letter followed only by lower case characters is a part

* **Section 3 :** `[a-z]+` : Anything that contains only lower case letters is a part

* **Section 4 :** `([A-Z]+)(?![a-z])` : Anything that contains only capital letters but is not followed by a lower case letter


### Exemples : 
* `APIFinder` must return `api-finder` (`API` => section 4 and `Finder` => section 2)
* `UserAPI20Endpoint` must return `user-api-20-endpoint` (`User` => section 2,  `API` => section 4, `20` => section 1 and  `Endpoint` => section 2)
* `20abcDe` must return `20-abc-de` (`20` => section 1, `abc` => section 3 and `DE` => section 4)
* `20abcDE` must return `20-abc-de` (`20` => section 1, `abc` => section 3 and `De` => section 2)
* `Custom*XML*Parser` must return `custom-xml-parser` ( `Custom`=> section 2, `*` => section C, `XML` => section 4, `*` => section C and `Parser` => section 2)
*  `null` must return `""` (sections A and C)
