# Geolocation

Geolocation for specific places, like coffeshop, or hookah places.

http://www.vandpibecafe.dk

![](https://github.com/jamalsoueidan/geolocation/blob/master/screenshot1.png?raw=true)

![](https://github.com/jamalsoueidan/geolocation/blob/master/screenshot.png?raw=true)

## Rules/develop

- Router custom Component attribute, doesn't need to have reference to Page to render, only the name! ApplicationLayout should handle the rest!
- Router middleware should handle loading of the data that every page needs, either before rendering og after. (onEnter, onSuccess), develop middleware to handle this, and figure out where loading snippet code should be placed, inside page folder?
- All components in components folder should be dump/presentational components!
- Pages acts as smart/containers components.
