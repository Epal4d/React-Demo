//components - jsx - function retun(<> ..jsx.. </>)
//- add props
//- external file - export/import 
export default function Header(props)
{
    return(
    <>
        <h1>{props.title}</h1>
    </>
    )
}

/*

ERROR in [eslint]
src\App.js
  Line 41:12:  'Header' is not defined  react/jsx-no-undef

Search for the keywords to learn more about each error.

webpack compiled with 1 error and 1 warning

*/