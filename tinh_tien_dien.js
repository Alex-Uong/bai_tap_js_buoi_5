/**
 * input: nhận tên và số điện tiêu thụ.
 * process: dưạ vào mức điện tiêu thụ và các mốc quy định sẵn, tính ra tiền điện.
 * output: xuất tên và tiền điện.
 */

// Khai báo biến

// Tính tiền điện
function tinhTienDien() {
  const ten = document.getElementById("hoTen").value;
  const soDien = document.getElementById("soDienTieuThu").value * 1;
  let tienDien = 0;
  if (soDien <= 50) {
    tienDien = soDien * 500;
  } else if (soDien <= 100) {
    tienDien = 50 * 500 + (soDien - 50) * 650;
  } else if (soDien <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soDien - 100) * 850;
  } else if (soDien <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soDien - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soDien - 350) * 1300;
  }

  // xuất tên và tiền điện
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Họ và tên: ${ten} <br> Tiền điện: ${tienDien} VND`;
}
