const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
//  {/* <div className="row">
//         <div className="col-md-3">
//         <Newsitems   />
//         </div>
//         <div className="col-md-3">
//         <Newsitems />
//         </div>
//         <div className="col-md-3">
//         <Newsitems />
//         </div>
//         <div className="col-md-3">
//         <Newsitems />
//         </div> */}
//       {/* </div> */}
