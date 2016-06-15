# Panel macros app
There are 5 different panels inside:
1. Default grey panel without an icon
2. Info panel with icon
3. Note panel with icon
4. Error panel with icon
5. Success panel with icon

![Panels](images/panels.png)

## Installing
It's as easy as installing this app from enonic market and adding it to your site

## Usage
Press 'Insert macro' in the html area toolbar and select needed panel from the macro dropdown.

The most basic panel will create the following text inside html area:
```
[panel/]
```
Which will look like this in preview and portal

![Default panel](https://github.com/enonic/app-panel-macros/blob/912220fdb2c128c9eb34136c1a76ae011e35982f/images/default.PNG)

Other panels available are:
```
[note]
[info]
[success]
[error]
```

Now if we choose info panel macro and add some text to it following text will be generated:
```
[info]Panel text goes here...[/info]
```
This will look like this:

![Info panel](images/info.png)

We can also add headers to our panels what will produce the following:
```
[error header="Houston, we've got a problem!"]The problem itself goes here...[/error]
```
That will look like this:

![Error panel](images/error.png)

Alternatively we can omit the body and have just the header:
```
[note header="Friendly warning"/]
```
Which will give it some stress:

![Note panel](images/note.png)

And one more thing...messages can be multiline:
```
[success header="Success story"]Success story text goes here and is hopefully long enough to demonstrate that messages can be as long as your imagination allows[/success]
```

![Success panel](images/success.png)