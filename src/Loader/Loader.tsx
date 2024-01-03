// import CircularProgress from '@mui/material/CircularProgress';
// import { styled } from '@mui/system';

// const StyledDotLoader = styled('div')({
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   height: '100vh',
//   '& > div': {
//     position: 'relative',
//     animation: 'rotate 1.5s linear infinite',
//   },
//   '& > div > div': {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     animation: 'bounce 1.5s infinite',
//   },
//   '& > div > div:nth-child(2)': {
//     animationDelay: '-0.75s',
//   },
//   '@keyframes rotate': {
//     '0%': {
//       transform: 'rotate(0deg)',
//     },
//     '100%': {
//       transform: 'rotate(360deg)',
//     },
//   },
//   '@keyframes bounce': {
//     '0%, 100%': {
//       transform: 'scale(0)',
//     },
//     '50%': {
//       transform: 'scale(1)',
//     },
//   },
//   '& .MuiCircularProgress-colorPrimary': {
//     color: '#374151',
//   },
// });

// const DotLoader = () => {
//   return (
//     <StyledDotLoader>
//       <div>
//         <div>
//           <CircularProgress size={30} />
//         </div>
//         <div>
//           <CircularProgress size={30} />
//         </div>
//       </div>
//     </StyledDotLoader>
//   );
// };

// export default DotLoader;
