import { useTween } from 'react-use';
export default function HomeView() {
  const value = useTween('elastic', 1000, 500);
  return <h1 style={{ marginLeft: value * 200 - 200 }}>Home Page</h1>;
}
