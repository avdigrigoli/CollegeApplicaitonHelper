# How to use Custom Components

To make use of custom components (such as the buttons), you will need to import the exported constant var for the component.
The name, by our convention, will match the file name minus the JS extension. It should look like this:

`import ButtonPrimary from '../../components/buttons/ButtonPrimary';`

After importing the component and adding the tag to your layout, you can add any props as usual. The only exception to this is styling. If you need to add style elements, say the width and heigth of a button, pass it as you would a normal style element, but with the extStyle prop instead. extStyle is shorthand for extra styles. Example below.

```
    <ButtonPrimary
      extStyle={{width: "30%", height: 50}}
    >
      <Text>Button</Text>
    </ButtonPrimary>
```

## Currently existing components

### ButtonPrimary

- This will make a button with the primary color

### ButtonSecondary

- This will make a button with the secondary color

### TitleText

- This will create a text view formatted with the font size and type we will use for titles
