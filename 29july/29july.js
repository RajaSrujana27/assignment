// 1. Creating Promises
function asyncTask(name, delay, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`Task [${name}] failed`);
        } else {
          resolve(`Task [${name}] completed`);
        }
      }, delay);
    });
  }
  
  // 2. Using Promises
  const task1 = asyncTask('Task 1', 1000, false);
  const task2 = asyncTask('Task 2', 2000, false);
  const task3 = asyncTask('Task 3', 3000, true);
  
  // 3. Promise.all
  Promise.all([task1, task2, task3])
    .then(results => {
      console.log('Promise.all results:', results);
    })
    .catch(error => {
      console.error('Promise.all error:', error);
    });
  
  // 4. Promise.allSettled
  Promise.allSettled([task1, task2, task3])
    .then(results => {
      console.log('Promise.allSettled results:');
      results.forEach(result => {
        if (result.status === 'fulfilled') {
          console.log('Fulfilled:', result.value);
        } else if (result.status === 'rejected') {
          console.error('Rejected:', result.reason);
        }
      });
    });
  
  // 5. Error Handling in asyncTask
  function asyncTaskWithErrorHandling(name, delay, shouldReject) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          if (shouldReject) {
            reject(`Task [${name}] failed`);
          } else {
            resolve(`Task [${name}] completed`);
          }
        }, delay);
      } catch (error) {
        reject(`Task [${name}] encountered an error: ${error.message}`);
      }
    });
  }
  

  