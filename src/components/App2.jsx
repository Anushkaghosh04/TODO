// Function Component using JSX
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

// Using the component
export function App2() {
  return (
    <div>
      <Welcome name="Pratik" />
      <Welcome name="Anjali" />
      <Welcome name="Anushka" />
    </div>
  );
}