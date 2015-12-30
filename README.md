# ng2-directives
Directives for ng2

*NgPluralize - ng-pluralize for angular2 replacement
## Running the examples

1. Install the dependencies

```
npm install
```

2. Run to build the bundle.js file and if you want to watch for changes in the file system - e.g. when editing

```
./node_modules/.bin/webpack --watch
```

3. Optionally start the static resources server (and visit http://localhost:8080/examples)

```
     npm start
```

##ngPluralize Examples


###without offset

```
<ngPluralize [count]="1"
             [when]="{'0': 'Nobody is viewing.',
                     'one': '1 person is viewing.',
                     'other': '{} people are viewing.'}">
</ngPluralize>
```

outputs

```
1 person is viewing.
```


###with offset

```
<ngPluralize [count]="3"
             [offset]="2"
             [when]="{'0': 'Nobody is viewing.',
                     '1': person1 + ' is viewing.',
                     '2': person1 + ' and ' + person2 + ' are viewing.',
                     'one': person1 + ', ' + person2 + '  and one other person are viewing.',
                     'other': person1 + ', ' + person2 + ' and {} other people are viewing.'}">
</ngPluralize>
```

outputs

```
Igor, Misko and one other person are viewing.
```

###For more example see examples folder

TODO - add tests