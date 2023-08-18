# Local environment

* Current node version that is known to be working with the website is node v15.14.0

# Before start
Project requires change in Bootstrap before start

`node_modules/bootstrap/scss/bootstrap.scss`
```
@import "variables";
```
to 
```
@import "../../../src/styles/variables_bootstrap";
```

and 
`node_modules/bootstrap/scss/_variables.scss`
to 
```
@import "../../../src/styles/variables_bootstrap";
```


line 100 in `node_modules/bootstrap/scss/_utilities.scss`
```
"border-XYZ": (
  property: border-top,
  values: (
    null: $border-width solid $border-color,
    0: 0,
  )
),
```
to 
```
"border-XYZ": (
  property: border-top,
  values: (
    null: $border-width solid var(--border-color, $border-color),
    0: 0,
  )
),
```