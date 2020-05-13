import {useLocalStorage} from './useLocalStorage';
import {useEffect} from 'react';

export const useDarkMode = () => {
  const [toggleDarkMode, setToggleDarkMode] = useLocalStorage('darkMode')

  useEffect(() => {
    const app = document.getElementById('root')
    toggleDarkMode === true ? app.className = ('dark-mode') : app.className = ('')
  }, [toggleDarkMode]); 

  return( [toggleDarkMode, setToggleDarkMode] )

}