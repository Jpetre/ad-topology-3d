import StoreContext from '../store/StoreContext'
import * as React from 'react'

/**
 * Retrieve MobX stores from the context.
 * Prefer to use this hook instead of the `@inject` decorator on class based component.
 */
export const useStore = () => {
  const value = React.useContext(StoreContext)
  console.log('value', value);
  if (!value) {
    console.log('Store has not been found')
  }

  return value
}
