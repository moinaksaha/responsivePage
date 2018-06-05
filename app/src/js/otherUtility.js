// Function to randomly return a promise with equal success and fail probable response
// Used to mock ajax call with success/error response
export function submitIt(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve(data);
          return;
        }
  
        reject(new Error('BANG! Try again later'));
      }, 2000);
    });
  }