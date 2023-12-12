function numberOneTriangle(num) {
    if (num >= 1 && num <= 10) {
      for (let i = 1; i <= num; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
          row += '*';
        }
        console.log(row);
      }
    } else {
      console.log('Số nguyên không hợp lệ. Vui lòng chọn số trong khoảng từ 1 đến 10.');
    }
  }
  
  
  numberOneTriangle(6);