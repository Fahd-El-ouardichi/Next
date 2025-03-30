import Hello from './components/hello';

export default function Home() {
  console.log('What am I server/client')

  return (
    <>  
      <h1 className="text-3xl">Welcome to NextJs</h1>
      <Hello />
    </>
    
  );
}
