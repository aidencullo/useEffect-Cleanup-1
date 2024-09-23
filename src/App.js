import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    function handleScroll(e) {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {[...Array(100)].map((_, i) => (
	<div key={i} style={{ height: '100vh' }}>
	  {i}
	</div>
      ))}
    </>
  );
}
