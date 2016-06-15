# Panel macros app
There are 5 different panels inside:

- Default grey panel without an icon
- Info panel with icon
- Note panel with icon
- Error panel with icon
- Success panel with icon

![Panels](https://github.com/enonic/app-panel-macros/blob/d88ab0ae2e485aece765c21f14ec255497faf337/images/panels.PNG)

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

![Info panel](https://github.com/enonic/app-panel-macros/blob/d88ab0ae2e485aece765c21f14ec255497faf337/images/info.PNG)

We can also add headers to our panels what will produce the following:
```
[error header="Houston, we've got a problem!"]The problem itself goes here...[/error]
```
That will look like this:

![Error panel](https://github.com/enonic/app-panel-macros/blob/d88ab0ae2e485aece765c21f14ec255497faf337/images/error.PNG)

Alternatively we can omit the body and have just the header:
```
[note header="Friendly warning"/]
```
Which will give it some stress:

![Note panel](https://github.com/enonic/app-panel-macros/blob/d88ab0ae2e485aece765c21f14ec255497faf337/images/note.PNG)

And one more thing...messages can be multiline:
```
[success header="Success story"]Success story text goes here and is hopefully long enough to demonstrate that messages can be as long as your imagination allows[/success]
```

![Success panel](https://github.com/enonic/app-panel-macros/blob/d88ab0ae2e485aece765c21f14ec255497faf337/images/success.PNG)