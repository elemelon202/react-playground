// import axios from "axios";
// import { useEffect, useState } from "react";

// interface User {
//   id: number;
//   name: string;
// }

// function App() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setUsers(res.data))
//       .catch((err) => setError(err.message));
//   }, []);
//   return (
//     <>
//       {error && <p className="text-danger">{error}</p>}
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// useEffect(() => {
//     const controller = new AbortController();
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => setUsers(res.data))
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//       });

//     return () => controller.abort();

// setIsLoading(true);
//     axios
//       .get<User[]>("https://jsonplaceholder.typicode.com/users", {
//         signal: controller.signal,
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setIsLoading(false);
//       });
