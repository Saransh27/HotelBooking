// import React, { useState } from 'react';
// import styled from 'styled-components';

// import FormInput from './components/Input';
// import Dropdown from './components/Dropdown';
// import Button from './components/Button';

// const StyledFormWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   padding: 0;
// `;

// const StyledForm = styled.form`
//   width: 100%;
//   max-width: 700px;
//   padding: 40px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-sizing: border-box;
//   box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
// `;

// const StyledError = styled.div`
//   color: red;
//   font-weight: 800;
//   margin: 0 0 40px 0;
// `;

// const options = [
//   { label: '101', value: '101' },
//   { label: '102', value: '102' },
//   { label: '103', value: '103' },
//   { label: '104', value: '104' },
//   { label: '201', value: '201' },
//   { label: '202', value: '202' },
//   { label: '203', value: '203' },
//   { label: '204', value: '204' },
// ];

// const initalState = {
//   name: '',
//   email: '',
//   message: '',
//   gender: '',
// };

// function App() {
//   const [state, setState] = useState(initalState);
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('submitted!');
//     console.log(state);

//     for (let key in state) {
//       if (state[key] === '') {
//         setError(`You must provide the ${key}`);
//         return;
//       }
//     }
//     setError('');
//     // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//     // const test = regex.test(state.email);
//     // console.log(test);

//     console.log('Succeeded!!!');
//   };

//   const handleInput = (e) => {
//     const inputName = e.currentTarget.name;
//     const value = e.currentTarget.value;

//     setState((prev) => ({ ...prev, [inputName]: value }));
//   };

//   return (
//     <>
//       <StyledFormWrapper>
//         <StyledForm onSubmit={handleSubmit}>
//           <FormInput
//             label='Surname'
//             value={state.name}
//             onChange={handleInput}
//           />
//           <Dropdown
//             label='Room'
//             options={options}
//             value={state.message}
//             onChange={handleInput}
//           />
//           <FormInput
//             label='Booking Date'
//             type='date'
//             value={state.name}
//             onChange={handleInput}
//           />
//           {error && (
//             <StyledError>
//               <p>{error}</p>
//             </StyledError>
//           )}
//           <Button type='submit'>Add Booking</Button>
//         </StyledForm>
//       </StyledFormWrapper>
//     </>
//   );
// }

// export default App;
